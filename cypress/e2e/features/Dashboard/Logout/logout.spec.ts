import {  When, And } from "cypress-cucumber-preprocessor/steps";
import {  DashboardPage } from "../../../index";





When("The user clicks on profile menu", () => {

    DashboardPage.getProfileIconBtn().click();

});

And("The user clicks on disconnection submenu", () => {

    DashboardPage.getDisconnectionIconBtn().click();

});
