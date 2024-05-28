import { Then, When, And, Before } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../../index";




When("user clicks on Reset password link", () => {

    LoginPage.getResetPasswordLink().click();

});

Then("The Password forgotten page is displayed", () => {

    LoginPage.getResetPasswordCard().should('exist');

});
When("The user enters a valid email", () => {


    cy.fixture("users.json").then((users) => {
        LoginPage.getEmailField().type(users.correctCredentials.email);
    });

});

When("The user enters a invalid email", () => {


    cy.fixture("users.json").then((users) => {
        LoginPage.getEmailField().type(users.incorrectCredentials.email);
    });

});

And("The user clicks on Reset button", () => {

    LoginPage.getSubmitResetPwdBtn().should('be.visible').dblclick({ force: true, multiple: true });

    LoginPage.getLoadingSpinner().should('exist');
});
Then("The confirmation to reset password is displayed", (dataTable) => {

  // LoginPage.getHiddenLoadingSpinner()
  LoginPage.getLoadingSpinner().should('exist').then(() => {

    LoginPage.getResetPwdPopup().should('exist');

    dataTable.hashes().forEach((element) => {
        LoginPage.getResetPwdPopupTitle().contains(element.title);
        LoginPage.getResetPwdPopupContent().contains(element.content);
        LoginPage.getResetPwdPopupAction().contains(element.button);
    });

});
  


});

When("The user enters an invalid format email", () => {


    cy.fixture("users.json").then((users) => {
        LoginPage.getEmailField().type(users.incorrectCredentials.invalidFormatemail);
    });

});


Then("An error message {string} is displayed", (content) => {

    LoginPage.assertResetPwdError(content).should('exist');

});


When("The user clicks on cancel button", () => {

    LoginPage.getCancelResetPwdBtn().click();


});




