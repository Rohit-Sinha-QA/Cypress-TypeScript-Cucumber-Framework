# Feature description
Feature: background

  # background description contains common steps for all scenarios
  Background: background
    Given I am on login page
    When I enter username and password
    Then I click on login button

  # Scenario description
  Scenario: background one
    Given I enter in textbox

  # Scenario description
  Scenario: background two
    Given I click on radiobutton
