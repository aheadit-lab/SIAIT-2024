export abstract class Page {
    static url: string;
  
    static visit(): void {
      cy.visit(Cypress.env("baseUrl"));
    }


    public static generateLogin(): string {
      var str = "rma";
      for (let i = 0; i < 4; i++) {
       // var x = Math.random() * 26 + 65;
       // str += String.fromCharCode(x);
        var x = Math.floor(Math.random() * 10);
        str += x.toString();
      }
      return str;
    }
   
  
   static getHiddenLoadingSpinner = () => cy.get('div[id="divload"]' , {timeout : 3000}).parent('div[aria-hidden="true"]');

   static getLoadingSpinner = () =>cy.get('div[id="loader"]', {timeout : 3000}); 

   static DisabledSubmitButton = () =>cy.get('button[type="submit"][disabled="true"]'); 

  
  }
  