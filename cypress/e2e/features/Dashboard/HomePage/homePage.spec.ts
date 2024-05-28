import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { Page, DashboardPage } from "../../../index";



Then("home page is displayed with SIAIT logo", () => {

    DashboardPage.getHomePageURL().should('exist');
    DashboardPage.getSiaitLogo().should('exist');
    //  DashboardPage.getHiddenLoadingSpinner().should('exist');
});


And("the side bar menu is displayed", (dataTable) => {

    dataTable.hashes().forEach((element) => {
        DashboardPage.getMenu(element.menu).should('exist');

    });

});

When("The user clicks on {string} menu", (content) => {

    DashboardPage.getMenu(content).click({ force: true });
});



Then("The {string} submenu is displayed", (content) => {


    if (content === "Jours feriés") {
        DashboardPage.getHolidaysSubmenu().should('exist');
    }
    else
        if (content === "Congés") {
            DashboardPage.getLeavesSubmenu().should('exist');
        }
        else
            if (content === "Fiches de Paie") {
                DashboardPage.getPayChecksSubmenu().should('exist');
            }
            else
                if (content === "Imputation") {
                    DashboardPage.getImputationSubmenuTitle().should('exist');
                }
                else
                    if (content == "FDT") {
                        DashboardPage.getFdtSubmenu().should('exist');
                    }
                    else
                        if (content === "Objectifs") {
                            DashboardPage.getObjectifsSubMenuTitle().should('exist');
                        }
                        else
                            if (content === "Tableau de bord") {
                                DashboardPage.getDashboardPerformanceSubmenu().should('exist');
                            }
                            else
                                if (content === "Gestion des campagnes") {
                                    DashboardPage.getGestionCampagneSubmenu().should('exist');
                                }
                                else {
                                    DashboardPage.getMenuTitle(content).should('exist');
                                }


});


And("Notifications menu is displayed", () => {

    DashboardPage.getNotificationsIcon().should('exist');


});

And("Profile menu is displayed", () => {

    DashboardPage.getProfileIcon().should('exist');
});

And("welcome message for connected user is displayed", () => {

    cy.fixture("users.json").then((user) => {
        cy.contains(`Bienvenue ${user.managerCorrectCredentials.firstname} ${user.managerCorrectCredentials.lastname}`).should('be.visible'); 
    });

});




