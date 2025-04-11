import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/loginPage";

const loginPage = new LoginPage();

Given('I am on login page', function(){
    cy.visit("https://rohit-automation.netlify.app/")
})

When('I enter username and password', function(){
    loginPage.typeUsername('admin')
    loginPage.typePassword('admin@1234')
})

When('I click on login button', function(){
    loginPage.clickLogin()
})

Then('I see the dashboard', function(){
    loginPage.verifyDashboard()
})
