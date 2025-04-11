Feature: Verify login

Scenario: Verify login with correct credentials
Given I am on login page
When I enter username and password
When I click on login button
Then I see the dashboard