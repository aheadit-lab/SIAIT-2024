# langauge en
Feature: Login feature
    I want to login into the SIAIT site

    Background:
        Given user is on SIAIT login page


    Scenario: Successful login
        When user enters a correct username
        And user enters a correct password
        And user clicks on sign in button
        Then user is redirected to home page

    Scenario: Failed login
        When user enters an incorrect username
        And user enters an incorrect password
        And user clicks on sign in button
        Then authentication error message " Login et/ou mot de passe invalide(s) " is displayed


    Scenario: Check behavior of login button if required field is not filled in
        Then sign in button is disabled
        When user enters a correct username
        Then sign in button is disabled
        And user deletes username value
        Then sign in button is disabled
        When user enters a correct password
        Then sign in button is disabled
        And user deletes password value
        Then sign in button is disabled

