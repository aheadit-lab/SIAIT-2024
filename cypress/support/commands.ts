/// <reference types="cypress" />

import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage, DashboardPage, UsersPage } from "../e2e/index";

let resetConnection: boolean = false;

const url = "http://siait.aheadit-lab.com:44309/#/login";


Cypress.Commands.add('login', () => {

    cy.fixture("users.json").then((user) => {
        LoginPage.getUsernameField().type(user.managerCorrectCredentials.login);
        LoginPage.getPasswordField().type(user.managerCorrectCredentials.password);
        LoginPage.getConnectionButton().click();
        DashboardPage.assertUserAuthentified(user.managerCorrectCredentials.fullName);     
      //  cy.contains(`Bienvenue ${user.managerCorrectCredentials.firstname} ${user.managerCorrectCredentials.lastname}`).should('be.visible'); 
    });
});


Cypress.Commands.add('logout', () => {
    DashboardPage.getProfileIconBtn().click();
    DashboardPage.getDisconnectionIconBtn().click();
    LoginPage.getLoginPageURL().should('exist');

});

Cypress.Commands.add("ensureIsLogged", () => {

    function doLogin() {

        cy.get('body')
            .then(($body) => {

                //  class="container-fluid"

                const loginForm = Cypress.$('span.mat-button-wrapper:contains("Se connecter")');

                if (loginForm.length > 0) {
                    (cy as any).login();
                }
            });

    }

    cy.on("fail", (err, runnable) => {
        resetConnection = true;
        throw err;
    });

    if (resetConnection) {
        cy.clearCookies();
        cy.visit(url ,
        { 
            onBeforeLoad(win) {
                win.sessionStorage.clear();
            }
        }).get('span.mat-button-wrapper:contains("Se connecter")', { timeout: 30000 })
    .then(() => {
        resetConnection = false;
        doLogin();

    })


    }
    else {

    doLogin();
}

});



Cypress.Commands.add('accessTo', (menu : any, subMenu: any, link) => { 
   
    DashboardPage.getSideBar().first();
    DashboardPage.getMenu(menu).click();
    DashboardPage.getMenu(subMenu).click();
    cy.url().should('contain', link);

});


Cypress.Commands.add("submitButton", () => {
    UsersPage.getsubmitButton().click();
    UsersPage.getNotification();
});

/*

Cypress.Commands.add("goNextPage", () => {
    if (!UsersPage.getLastPageDisabled()) {
        UsersPage.getNextPage().click();
    };
});
*/








