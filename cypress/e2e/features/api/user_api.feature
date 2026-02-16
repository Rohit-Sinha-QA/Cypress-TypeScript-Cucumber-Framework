Feature: API testing for Users

  Scenario: Create a user
    Given I have create user payload
    When I send POST request to create user
    Then the create user response status should be 201
    And the response should contain "id"

  Scenario: Update a user
    Given I have update user payload
    When I send PUT request to update user
    Then the update user response status should be 200
    And the response should contain "firstName"
