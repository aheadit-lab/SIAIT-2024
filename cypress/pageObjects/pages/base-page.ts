/// <reference types="Cypress" />

export abstract class BasePage {
    static url: string = "/";
    static apiBaseurl: string = Cypress.env("apiBaseurl");

/*
    
    private static frenchMonths = {
      1: "JANV.",
      2: "FEVR.",
      3: "MARS",
      4: "AVR.",
      5: "MAI",
      6: "JUIN",
      7: "JUIL.",
      8: "AOÛT",
      9: "SEPT.",
      10: "OCT.",
      11: "NOV.",
      12: "DÉC."
  }

  public static assertOperationPerformedWithSuccess = () => cy.get("snack-bar-container").contains("Opération efféctuée avec succés !");

  public static sortGrid(attributeName: string, order: "ASC" | "DESC" = "ASC") {
      cy.get(`th[mat-sort-header='${attributeName}'] button.mat-sort-header-button`).click();
      if (order === "DESC") {
          cy.wait(500);
          cy.get(`th[mat-sort-header='${attributeName}'] button.mat-sort-header-button`).click();
      }
  }

  public static getDatePickerToggle = (inputSelector) => cy.get(inputSelector).parent().parent().find("mat-datepicker-toggle>button");


  public static selectDate(inputSelector: string, date: Date) {
      BasePage.getDatePickerToggle(inputSelector).click();
      cy.contains("div.mat-datepicker-popup div.mat-calendar-body-cell-content", date.getDate()).click();
  }

  public static selectMonth(inputSelector: string, date: Date) {
      BasePage.getDatePickerToggle(inputSelector).click();
      const year = date.getFullYear();
      cy.contains("div.mat-datepicker-popup div.mat-calendar-body-cell-content", year).click();
      const month = BasePage.frenchMonths[date.getMonth()];
      cy.contains("div.mat-datepicker-popup div.mat-calendar-body-cell-content", month).click();
  }

  */
  }
  