# language en
Feature: Logout feature
    I want to logout from the SIAIT site

    Background:
        #Given user is logged in on SIAIT site
        Given user is on SIAIT home page


    Scenario: Logout 
        When The user clicks on profile menu
        And The user clicks on disconnection submenu
        Then The user is redirected to login page