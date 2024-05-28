# language en
Feature: Reset Password
    I want to login into the SIAIT site

    Background:
        Given user is on SIAIT login page


    Scenario: Reset password with valid email
        When user clicks on Reset password link
        Then The Password forgotten page is displayed
        When The user enters a valid email
        And The user clicks on Reset button
        Then The confirmation to reset password is displayed
             | title                | content                                                                            | button |
             | Mot de passe oublié! | Vérifiez vos courriels pour les instructions de réinitialisation de mot de passe ! | Ok     |

  Scenario: Reset password with invalid email
        When user clicks on Reset password link
        Then The Password forgotten page is displayed
        When The user enters a invalid email
        And The user clicks on Reset button
        Then The confirmation to reset password is displayed
            | title                | content                                                                            | button |
            | Mot de passe oublié! | Vérifiez vos courriels pour les instructions de réinitialisation de mot de passe ! | Ok     |


    #Bug to be reported
    @SIAIT-xxxx
    Scenario: Reset password with invalid format email
        When user clicks on Reset password link
        Then The Password forgotten page is displayed
        When The user enters an invalid format email
        And The user clicks on Reset button
        Then An error message " Veuillez s'il vous plait bien saisir votre email ! " is displayed

    Scenario: Reset password with empty email value
        When user clicks on Reset password link
        Then The Password forgotten page is displayed
        When The user clicks on Reset button
        Then An error message " Veuillez s'il vous plait bien saisir votre email ! " is displayed
           

    Scenario: Back to Login page after cancel Reset Password
        When user clicks on Reset password link
        Then The Password forgotten page is displayed
        When The user clicks on cancel button