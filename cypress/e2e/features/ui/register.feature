@ui
Feature: Register functionality

  Scenario Outline: Register user with valid data
    Given I open the register page
    When I register with email "<email>", and password "<password>"

    Examples:
      | name   | email               | password      |
      | Rohit  | rohit@test.com      | admin@123456  |
      | Aman   | aman@test.com       | admin@12      |

  Scenario Outline: Register with invalid email
    Given I open the register page
    When I register with email "<email>", and password "<password>"

    Examples:
      | name  | email        | password       |
      | Rohit | rohit@       | admin@1234     |
      | Aman  | aman.com     | admin@12345678 |
