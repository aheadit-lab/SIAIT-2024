/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      
        login: any;
        logout: any;
        ensureIsLogged : any
        accessTo: any
        submitButton: any

      
    }
}