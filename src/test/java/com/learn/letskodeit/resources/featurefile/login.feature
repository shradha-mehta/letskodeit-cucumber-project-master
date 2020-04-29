Feature: Login functionality
  As a User I want to login into letskodeit website

  Scenario: User should navigate to login page successfully
    Given I am on letskodeit homepage
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: User should login successfully with valid credentials
    Given I am on letskodeit homepage
    When I click on login link
    And I enter email "jiyapandya@gmail.com"
    And I enter password "Rahi0804"
    And I click on login button
    Then I should login successfully