import { Then, When, And , Before } from "cypress-cucumber-preprocessor/steps";
import { LoginPage, DashboardPage } from "../../../index";




When("user enters a correct username", () => {

    cy.fixture("users.json").then((users) => {
        LoginPage.getUsernameField().type(users.correctCredentials.login);
    });


});

And("user enters a correct password", () => {

    cy.fixture("users.json").then((users) => {
        LoginPage.getPasswordField().type(users.correctCredentials.password);
    });


});

And("user clicks on sign in button", () => {

    LoginPage.getConnectionButton().click();


});


Then("user is redirected to home page", () => {

    cy.fixture("users.json").then((users) => {
        DashboardPage.assertUserAuthentified(users.correctCredentials.fullName);
    });
});


When("user enters an incorrect username", () => {

    cy.fixture("users.json").then((users) => {
        LoginPage.getUsernameField().type(users.incorrectCredentials.login);
    });


});
And("user enters an incorrect password", () => {

    cy.fixture("users.json").then((users) => {
        LoginPage.getPasswordField().type(users.incorrectCredentials.password);
    });


});



Then("authentication error message {string} is displayed", (content) => {

    LoginPage.assertInvalidCredentialsError(content);
}); 

Then("sign in button is disabled", () => {

    LoginPage.getDisabledConnectionButton().should('exist');
}); 

And("user deletes username value", () => {

    LoginPage.getUsernameField().type('{selectall}{backspace}');
}); 

And("user deletes password value", () => {

    LoginPage.getPasswordField().type('{selectall}{backspace}');
}); 




