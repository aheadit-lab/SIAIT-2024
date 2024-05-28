import { Page } from "../page";

export class UsersPage extends Page {
    url = "/users";

 
     static getMenu = (menu) => cy.contains("p", menu);
     static getSubmenu = (subMenu) => cy.contains("p", subMenu);


     static getCollaboratorInputField = () => cy.get("input[aria-label='Collaborateur']");
     static getUserByName  =(name: string)  => cy.contains("td", name);
     static getUserRow  =()  => cy.contains("td");

     static getPopupModal = () => cy.get('[class*="mat-dialog-container"]', {timeout : 3000});
     static getDialogModalTitle = () => cy.get('[class*="mat-dialog-title"]', {timeout : 3000});
     static getDialogModalContent = () => cy.get('[class*="mat-dialog-content"]', {timeout : 3000});
     static getConfirmButton = () => cy.contains("button", " Ok ");
     static getCancelButton = () => cy.contains("button", " Non ");



    
     static getaddButton = () => cy.contains("button", "Ajouter");
     static geturlPage = (url) => cy.url().should('contain', url);
     static getTitlePage = () => cy.contains("h4", "Nouvel utilisateur");
     static getUserFirstNameInput = () => cy.get("input[formcontrolname='firstNameControl']");
     static getUserLastNameInput = () => cy.get("input[formcontrolname='lastNameControl']");
     static getUserLoginInput = () => cy.get("input[formcontrolname='userNameControl']");
     static getUseremailInput = () => cy.get("input[formcontrolname='emailControl']");
     static getUserTelInput = () => cy.get("input[formcontrolname='phoneNumberControl']");
     static getUserpasswordInput = () => cy.get("input[formcontrolname='passwordControl']");
     static getUserCpasswordInput = () => cy.get("input[formcontrolname='passwordConfirmationControl']");
     static getprofile = () => cy.contains("span", "Profile");
     static getProfileCollaborator = () => cy.contains("span", " Collaborateur ");
    
     static getsubmitButton = () => cy.contains("button", "Sauvegarder");
     static getTitlePageEdit = () => cy.contains("h4", "Edition d'utilisateur");
     static getNotification = () => cy.contains("span", "Opération efféctuée avec succés !");
     static getusermail = () => cy.contains("td", "rma.user1@yopmail.com");
     static getUserEmail = () => cy.contains("td", "mail@mail.com");
   
     static getDelete = () => cy.contains("i", "delete");
     static getPopup = () => cy.contains("h1", "Attention!");
    
     static getErrorMsgLogin = () => cy.get("mat-error", { timeout: 3000 }).should("contain", /^Login\s([a-zA-Z]+\.[a-zA-Z]+)\sdéja\sutilisé$/g);
     static getErrorfield = () => cy.get("input[aria-invalid='true']");
     static getReturnButton = () => cy.contains("button", "Retour");
     static getUserTitlePage = () => cy.contains("h4", "Utilisateurs");
     static getNextPage = () => cy.get("button[aria-label='Next page']").invoke("disabled");
     static getLastPageDisabled = () => cy.get("button[disabled='true']");
     static getConfirmNextPage = () => cy.get("button[aria-label='Next page']").invoke("disabled='true'");
     static getSearchLogin = () => cy.contains("i", "search");
     static getPopin = () => cy.contains("h1", "Filtre");
     static getLoginInput = () => cy.get("input[placeholder='mot recherché']");
     static getFilterButton = () => cy.contains("button", " Filtrer");
     static getPageResult = () => cy.contains("td", "f.abir");
     static getSearchProfile = () => cy.get("button[aria-label='Change sorting for profil.name']").children();
     static getSearchName = () => cy.get("button[aria-label='Change sorting for firstName']").children();
     static getPopinProfile = () => cy.contains("h1", "Filtre");
     static getProfile = () => cy.contains("div", " Manager ");
     static getProfileResult = () => cy.contains("a", "Manager");
     static getPageNumber = () => cy.get("div.mat-paginator-range-label");
     static getItem  = () => cy.get("span[class='ng-tns-c57-13 ng-star-inserted']");

     static getPaginationField = () => cy.get("div[class*='mat-select-value']").scrollIntoView(); 

     static getHighPagination = () => cy.get("div[class*='mat-select-panel']")
    .children("[class*='ng-star-inserted']")
    .find("span[class*='mat-option-text']").contains("100");

}