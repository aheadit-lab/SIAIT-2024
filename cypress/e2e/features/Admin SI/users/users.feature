# language en
Feature: Users

    Background: Users menu
        Given connected user is on Users page


   Scenario: Add user
        When user clicks on add button
        Then user is on add user page
        When user types firstname
        When user types lastname
        When user types a login
        When user types email
        When user types phone number
        When user types password
        When user types confirmation password
        When user chooses the profile
        When user chooses the collaborator
        When user clicks on save button


    Scenario: Add multiple users

        When admin type multiple users

            | lastName | firstName | login    | email                  | mobilePhone | password | confirmation_password |
            | Manaiii  | Titi      | rmauser1 | rma.user1@yopmail.com  | 22369852    | 123456pm | 123456pm              |
            | Manaeii  | Toto      | rmauser2 | brma.user2@yopmail.com | 85963214    | 789456as | 789456as              |


    Scenario: Update user

        When user click on edit
        Then user is on update user page
        When user edit the name "manaiii"
        When user chooses the collaborator
        When user clicks on save button
        Then notification of succes is displayed


  Scenario: Check display of confirmation delete user popup
        When user click on delete of a user
        Then confirmation delete popup is displayed
            | title      | description                                           |
            | Attention! | Etes-vous sure de vouloir supprimer cet utilisateur ? |
        And delete actions buttons are displayed

    Scenario: Cancel delete user
        When user click on delete of a user
        And user click on cancel action button
        Then user is not deleted


    Scenario: Confirm delete user
        When user click on delete of a user
        And user click on confirmation action button
        Then user is deleted
		

    Scenario: add user with wrong first name
        When user clicks on add button
        Then user is on add user page
        When user types wrong firstname
        When user types lastname
        When user types a login
        When user types email
        When user types phone number
        When user types password
        When user types confirmation password
        When user chooses the profile
        When user chooses the collaborator
        Then the submit button is disabled

    Scenario: add user with empty first name
        When user clicks on add button
        Then user is on add user page
        When user types empty firstname
        When user types lastname
        When user types a login
        When user types email
        When user types phone number
        When user types password
        When user types confirmation password
        When user chooses the profile
        When user chooses the collaborator
        Then the submit button is disabled

    Scenario: add user with wrong last name
        When user clicks on add button
        Then user is on add user page
        When user types firstname
        When user types wrong lastname
        When user types a login
        When user types email
        When user types phone number
        When user types password
        When user types confirmation password
        When user chooses the profile
        When user chooses the collaborator
        Then the submit button is disabled

    Scenario: add user with empty last name
        When user clicks on add button
        Then user is on add user page
        When user types firstname
        When user types empty lastname
        When user types a login
        When user types email
        When user types phone number
        When user types password
        When user types confirmation password
        When user chooses the profile
        When user chooses the collaborator
        Then the submit button is disabled


    Scenario: add user with login already exists
        When user clicks on add button
        Then user is on add user page
        When user types wrong firstname
        When user types lastname
        When user types existing login
        When user types email
        When user types phone number
        When user types password
        When user types confirmation password
        When user choose the profile
        When user submit failure
        Then error message is displayed

  
    Scenario: add user with wrong confirmation password
          When user clicks on add button
        Then user is on add user page
        When user types firstname
        When user types lastname
        When user types a login
        When user types email
        When user types phone number
        When user types password
        When user types wrong confirmation password
        When user choose the profile
        Then password confirmation is on error

    @Not_automated
    Scenario: Return from add user screen 
        When user click add
        Then user is on add user page
        When user click on return button
        Then user is on user page

    @Not_automated
    Scenario: Access to the next page
        When user clicks on next page
        Then user is on the next page

    @Not_automated
    Scenario: Search users by login
        When user clicks on login search
        Then popin filter is displayed
        When user types login to Search
        When user clicks on filter button
        Then result page is displayed

    @Not_automated
    Scenario: Search user by profile
        When user clicks on profile search
        Then popin filter profile is displayed
        When user chooses the profile type
        When user clicks on filter profile button
        Then result page profile is displayed



