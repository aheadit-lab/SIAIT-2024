import { Then, When, Given, And } from "cypress-cucumber-preprocessor/steps";
import {Page ,  UsersPage } from "../../../../index";

let login: string ; 
let userToDelete = "test";

When("user clicks on add button", () => {

    UsersPage.getaddButton().click();

});
Then("user is on add user page", () => {

    UsersPage.getTitlePage();

});
When("user types firstname", () => {

    UsersPage.getUserFirstNameInput().type('userfirstname');

});
When("user types lastname", () => {
    UsersPage.getUserLastNameInput().type('userlastname');


});
When("user types a login", () => {

    login = Page.generateLogin(); 

    UsersPage.getUserLoginInput().type(login);

});
When("user types email", () => {

    UsersPage.getUseremailInput().type('mail@mail.com');

});
When("user types phone number", () => {

    UsersPage.getUserTelInput().type('25632145');

});
When("user types password", () => {

    UsersPage.getUserpasswordInput().type('123456at');

});
When("user types confirmation password", () => {

    UsersPage.getUserCpasswordInput().type('123456at');

});
When("user chooses the profile", () => {

    UsersPage.getprofile().click();
    UsersPage.getProfileCollaborator().click();
   // UsersPage.getCollaboratorInputField().type("Manai Radhia")

});


When("admin type multiple users", (data_table) => {
    var propValue;
    data_table.hashes().forEach(elem => {
        for (var propName in elem) {
            propValue = elem[propName]
        }
    });

    data_table.hashes().forEach(elem => {

        UsersPage.getaddButton().click();
        UsersPage.getTitlePage();
        UsersPage.getUserFirstNameInput().type(elem.lastName);
        UsersPage.getUserLastNameInput().type(elem.firstName);
        UsersPage.getUserLoginInput().type(elem.login);
        UsersPage.getUseremailInput().type(elem.email);
        UsersPage.getUserTelInput().type(elem.mobilePhone);
        UsersPage.getUserpasswordInput().type(elem.password);
        UsersPage.getUserCpasswordInput().type(elem.confirmation_password);
        UsersPage.getprofile().click(elem.profile);
        UsersPage.getProfileCollaborator().click(elem.profile);
        UsersPage.getCollaboratorInputField().type("Manai Radhia").type("enter");
     
        (cy as any).submitButton();
    });
});

When("user click on edit", () => {

    UsersPage.getPaginationField().click();
    UsersPage.getHighPagination().click();

    UsersPage.getusermail().click();
});

Then("user is on update user page", () => {

    UsersPage.getTitlePageEdit();
});

When("user edit the name {string}", (name) => {

    UsersPage.getUserFirstNameInput().clear();
    UsersPage.getUserFirstNameInput().clear();
    UsersPage.getUserFirstNameInput().type(name);

});
Then("notification of succes is displayed", () => {
    UsersPage.getNotification();
});

When("user click on delete of a user", () => {
     
    UsersPage.getUserByName(userToDelete).parent().contains("i", "delete").click();
});
        Then("confirmation delete popup is displayed", (dataTable) => {

            UsersPage.getPopupModal().should('exist');

            dataTable.hashes().forEach((element) => {
                UsersPage.getDialogModalTitle().contains(element.title);
                UsersPage.getDialogModalContent().contains(element.description);
            });
        });
        /*
            | title      | description                                           |
            | Attention! | Etes-vous sure de vouloir supprimer cet utilisateur ? |
            */
        And("delete actions buttons are displayed", () => {

            UsersPage.getConfirmButton().should('exist');
            UsersPage.getCancelButton().should('exist');
        });

        And("user click on confirmation action button", () => {

            UsersPage.getConfirmButton().click();
        });
        Then("user is deleted", () => {

            
        
            UsersPage.getUserRow().each(($row) => {
              const rowText = $row.text().trim();
              expect(rowText).to.not.contain(userToDelete)
            })
       
        });
          And("user click on cancel action button", () => {

            UsersPage.getCancelButton().click();
        });
        Then("user is not deleted", () => {
            UsersPage.getUserByName(userToDelete).should('exist'); 

      
        });

        When("user types wrong firstname", () => {
            UsersPage.getUserFirstNameInput().clear();
            UsersPage.getUserFirstNameInput().type("@#--$$$");
        
        });

        When("user types empty firstname", () => {
            UsersPage.getUserFirstNameInput().clear();
        
        });

        Then("the submit button is disabled", () => {
            UsersPage.DisabledSubmitButton().should('exist');
        
        });

        When("user types wrong lastname", () => {
            UsersPage.getUserLastNameInput().clear();
            UsersPage.getUserLastNameInput().type("$$$€e€€€#_");
        
        });

        When("user types empty lastname", () => {
            UsersPage.getUserLastNameInput().clear();
        
        });
