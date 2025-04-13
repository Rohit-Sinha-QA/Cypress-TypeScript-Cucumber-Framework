# Feature description
Feature: Scenario Outline

  # Scenario description
  Scenario Outline: Scenario Outline one
    Given I am on login page
    When I enter "<username>" and "<password>"
    And I click on login button
    Then I see the dashboard

    # Set of data
    Examples:
      | username | password   |
      | admin    | admin@1234 |
      | user2    | pass2      |
