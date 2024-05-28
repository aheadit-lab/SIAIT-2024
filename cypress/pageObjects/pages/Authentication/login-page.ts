import { Page } from "../page";

export class LoginPage extends Page {
    url = "/login";

    static getLoginPageURL = () => cy.url().should("include", "/login"); 
    
   // `/${name}`);

   static getUsernameField = () => cy.get("#mat-input-0" , {timeout : 3000}); 
   static getPasswordField = () => cy.get("#mat-input-1" , {timeout : 3000}); 
   static getEmailField = () => cy.get('input[name="Adresse"]' , {timeout : 3000}); 

   static getConnectionButton = () => cy.get('[class*="mat-button-wrapper"]' , {timeout : 3000}).contains("Se connecter");

   static getDisabledConnectionButton = () => cy.get('[class*="mat-button-wrapper"]' , {timeout : 3000}).parent('button[disabled="true"]'); 

  //  public static assertInvalidCredentialsError = (name : string) => cy.get("mat-error", {timeout: 10000}).contains(" Login et/ou mot de passe invalide(s) "); 

  static assertInvalidCredentialsError = (name : string) => cy.get("mat-error", {timeout: 10000}).contains(name); 

   static  getResetPasswordLink = () => cy.get('a', {timeout : 3000}).contains('Mot de passe oublié'); 

   static  getResetPasswordCard = () => cy.get('[class*="card-title"]', {timeout : 3000}).contains('Mot de passe oublié'); 

  // static getResetButton = () => cy.get('span[class*="mat-button-wrapper"]' , {timeout : 3000}).contains("Reinitialiser");

   static getResetButton = () => cy.get('button[class*="mat-raised-button"]' , {timeout : 3000}).first()
   .children('span[class*="mat-button-wrapper"]' , {timeout : 3000}).contains("Reinitialiser");

 // static getSubmitResetPwdBtn = () => cy.get('button[type="submit"].btn.btn-danger' , {timeout : 3000}).contains("Reinitialiser");

  static getSubmitResetPwdBtn = () => cy.get('[class*="mat-button-wrapper"]' , {timeout : 3000}).contains("Reinitialiser");

  // static getSubmitResetPwdBtn = () => cy.get('//*[@id="resizable-panels-root"]/div[3]/div[3]/div');
 //  static getSubmitResetPwdBtn = () => cy.get('#resizable-panels-root > div:nth-child(3) > div:nth-child(3) > div');

  // static getResetButton = () => cy.contains("Reinitialiser");

  
   static getResetPwdPopup = () => cy.get('[class*="mat-dialog-container"]' , {timeout : 10000}); 

   static getResetPwdPopupTitle = () => cy.get('[class*="mat-dialog-title"]' , {timeout : 3000}); 

   static getResetPwdPopupContent = () => cy.get('[class*="mat-dialog-content"]' , {timeout : 3000}); 

   static getResetPwdPopupAction = () => cy.get('[class="mat-dialog-actions"]' , {timeout : 3000}); 

   static getCancelResetPwdBtn = () => cy.get('[class*="mat-button-wrapper"]' , {timeout : 3000}).contains("Annuler");

   static assertResetPwdError = (name : string) => cy.get("mat-error", {timeout: 10000}).contains(name); 

}