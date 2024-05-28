import { Page } from "../page";

export class DashboardPage extends Page {
    url = "/home";

    
    static getHomePageURL = () => cy.url().should("include", "/home"); 
 
   static assertUserAuthentified = (fullName: string) => cy.get("#navigation", {timeout: 10000}).should("contain", fullName);

   static getMenu = (menu : string) => cy.contains("p[class*='menu-title']", menu);

   static getMenuTitle = (menu : string) => cy.contains('[class*="card-title"]', menu);
   
   static getLeavesSubmenuTitle = (menu : string) => cy.contains('[class*="mat-tab-label-content"]', menu);

   static getPayChecksSubmenuTitle = () => cy.contains('[class*="mat-tab-label-content"]', "Fiches de paie"); 

   public static getSideBar = () =>  cy.get("app-sidebar>div.sidebar-wrapper>ul.nav>li.nav-item"); 

   static getProfileIconBtn = () =>  cy.get('button[class*="mat-icon-button"]', {timeout: 3000}).contains("person"); 
   static getDisconnectionIconBtn = () =>  cy.get('mat-icon[class*="mat-icon"]', {timeout: 3000}).contains("exit_to_app"); 

   static getSiaitLogo = () =>  cy.get('div[class*="logo-img"]', {timeout: 3000});

   static getImputationSubmenuTitle = () => cy.contains('[class*="mat-tab-label-content"]', "Mes imputations"); 
   static getFdtSubmenuTitle = () => cy.contains('[class*="mat-tab-label-content"]', "Feuille de temps"); 
   static getObjectifsSubMenuTitle = () => cy.contains('[class*="mat-tab-label-content"]', "Mes objectifs"); 

   static getDashboardPerformanceSubmenu = () => cy.url().should("include", "/dashboardPerformance");  
   static getLeavesSubmenu = () => cy.url().should("include", "/leaves"); 
   static getHolidaysSubmenu = () => cy.url().should("include", "/holidays");
   static getGestionCampagneSubmenu = () => cy.url().should("include", "/campagne");  
   static getImputationSubmenu = () => cy.url().should("include", "/timetracking"); 
   static getPayChecksSubmenu = () => cy.url().should("include", "/payChecks"); 
   static getFdtSubmenu = () => cy.url().should("include", "/timesheet"); 


   static getNotificationsIcon = () => cy.get('[class*="material-icons"]' ,{timeout: 3000} ).contains("notifications");
   static getProfileIcon = () => cy.get('[class*="material-icons"]' ,{timeout: 3000} ).contains("person");
}