# Feature description
Feature: simple

  # Scenario description
  Scenario: simple one
    Given I am on login page
    When I enter username and password
    When I click on login button
    Then I see the dashboard