import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage, UsersPage, DashboardPage } from "../index";


Given("user is on SIAIT login page", () => {

    LoginPage.visit();
    LoginPage.getLoginPageURL().should('exist');


});



Given("connected user is on Users page", () => {


      //  cy.fixture("collaborators.json").then(collaborators => {
        //    cy.task("ensureUserNotExistByName", collaborators.collaborator1);
       // });
 

    cy.fixture("users.json").then(users => {
        LoginPage.visit();
          //  (cy as any).login(users.adminCredentials);
          cy.fixture("menu.json").then((fixtures) => {
            (cy as any).ensureIsLogged(users.adminCredentials);
            (cy as any).accessTo(
                fixtures.menuUtilisateur.menu,
                fixtures.menuUtilisateur.subMenu,
                fixtures.menuUtilisateur.link
            );
        });
    });


});

When("user clicks on save button", () => {

    (cy as any).submitButton();

});

When("user chooses the collaborator", () => {

    UsersPage.getCollaboratorInputField().type("Manai Radhia").type("enter");

});


Given("user is on SIAIT home page", () => {

    LoginPage.visit();
      (cy as any).ensureIsLogged();
    DashboardPage.getHomePageURL().should('exist');


});



Then("The user is redirected to login page", () => {

    LoginPage.getLoginPageURL().should('exist');


});

Then("The user is redirected to home page", () => {

    DashboardPage.getHomePageURL().should('exist');


});

When("The user clicks on SIAIT logo", () => {

    DashboardPage.getSiaitLogo().click({ force: true });


});