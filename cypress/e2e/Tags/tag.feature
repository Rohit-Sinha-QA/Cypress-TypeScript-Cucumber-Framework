# Feature tag
@run
Feature: Tag

  # Without tag
  Scenario: Tag one
    Given I am on login page
    When I enter username and password
    When I click on login button
    Then I see the dashboard
  # smoke tag
  @smoke
  Scenario: Tag two
   Given I am on login page
    When I enter username and password
    When I click on login button
    Then I see the dashboard

  # regression tag
  @regression
  Scenario: Tag three
    Given I am on login page
    When I enter username and password
    When I click on login button
    Then I see the dashboard

  # smoke and regression tag
  @smoke @regression
  Scenario: Tag four
    Given I am on login page
    When I enter username and password
    When I click on login button
    Then I see the dashboard

  # sanity tag
  @sanity
  Scenario: Tag five
    Given I am on login page
    When I enter username and password
    When I click on login button
    Then I see the dashboard

  # random tag
  @new
  Scenario Outline: Tag six
    Given I am on login page
    When I enter "<username>" and "<password>"
    And I click on login button
    Then I see the dashboard


    # positive tag
    @positive
    Examples:
      | username | password   |
      | admin    | admin@1234 |

    # negative tag
    @negative
    Examples:
      | username | password   |
      | abcd     | xyz        |