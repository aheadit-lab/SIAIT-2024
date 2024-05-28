# language en
Feature: Home page feature
    I want to check home page functions

    Background:
        Given user is on SIAIT home page


    Scenario: Check display of home page
        Then home page is displayed with SIAIT logo
        And welcome message for connected user is displayed
        And the side bar menu is displayed
            | menu                             |
            | Admin SI                         |
            | Gestion RH                       |
            | Gestion des projets & Ressources |
            | Gestion comptable                |
            | Gestion de performance           |
            And Notifications menu is displayed
            And Profile menu is displayed
        


    Scenario Outline: Navigate to "Admin SI" > "<submenu>" submenu
        When The user clicks on "Admin SI" menu
        And The user clicks on "<submenu>" menu
        Then The "<submenu>" submenu is displayed
        When The user clicks on SIAIT logo
        Then The user is redirected to home page

        Examples:
            | submenu      |
            | Profiles     |
            | Utilisateurs |
            | Jours feriés |
            | Entité       |
            | Parametrage  |

    Scenario Outline: Navigate between "Gestion RH" > "<submenu>" submenu
        When The user clicks on "Gestion RH" menu
        And The user clicks on "<submenu>" menu
        Then The "<submenu>" submenu is displayed
        When The user clicks on SIAIT logo
        Then The user is redirected to home page

        Examples:
            | submenu        |
            | Collaborateurs |
            | Congés         |
            | Fiches de Paie |
            | Prêts/Avances  |
            | Réclamations   |
            | Equipes        |


    Scenario Outline: Navigate between "Gestion des projets & Ressources" > "<submenu>" submenu
        When The user clicks on "Gestion des projets & Ressources" menu
        And The user clicks on "<submenu>" menu
        Then The "<submenu>" submenu is displayed
        When The user clicks on SIAIT logo
        Then The user is redirected to home page

        Examples:
            | submenu    |
            | Projets    |
            | Imputation |
            | Tâches     |
            | FDT        |

    Scenario Outline: Navigate between "Gestion de performance" > "<submenu>" submenu
        When The user clicks on "Gestion de performance" menu
        And The user clicks on "<submenu>" menu
        Then The "<submenu>" submenu is displayed
        When The user clicks on SIAIT logo
        Then The user is redirected to home page

        Examples:
            | submenu               |
            | Objectifs             |
            | Gestion des campagnes |
            | Tableau de bord       |

 

@Not_automated
   Scenario: Check display of Idle popup for current session
   Given the session has been in idle status
         When user still inactive for 30 minutes
         Then Idle popup is displayed
             | Title               | Message        |
             | You Have Been Idle! | No longer idle |
         And the actions button are displayed
             | Button |
             | Logout |
             | Stay   |
 
@Not_automated
    Scenario: Deacativate Idle status by "Stay"
        When Session has been in idle status
        Then Idle popup is displayed
            | Title               | Message        |
            | You Have Been Idle! | No longer idle |
        When User clicks on "Stay" button
        Then Idle popup is disappeared
        And User still on home page

@Not_automated
    Scenario: Deacativate Idle status by "Logout"
        When Session has been in idle status
        Then Idle popup is displayed
            | Title               | Message        |
            | You Have Been Idle! | No longer idle |
        When User clicks on "Logout" button
        Then Idle popup is disappeared
        And User is disconnected
        And Login page is displayed