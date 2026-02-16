Feature: Login functionality

  @test
  Scenario: Login with valid credentials (Direct data)
    Given I open the login page
    When I login with username "admin" and password "admin@1234"
    Then I should see dashboard page

  Scenario: Login using DataTable
    Given I open the login page
    When I login using below data table
      | username | password   |
      | admin    | admin@1234 |
    Then I should see dashboard page
