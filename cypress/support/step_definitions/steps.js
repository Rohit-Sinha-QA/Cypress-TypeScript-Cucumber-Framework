import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/loginPage";
import { Before, After, BeforeStep, AfterStep } from "@badeball/cypress-cucumber-preprocessor";

const loginPage = new LoginPage();


Before({ tags: "not @smoke" }, () => {
    cy.log("Run before every scenario (order 0)");
});
  
Before(() => {
    //cy.log("Run before every scenario (order 1)");
    cy.visit("https://rohit-automation.netlify.app/")
});
  
Before({ tags: "@smoke" }, () => {
    cy.log("Run before every scenario (smoke tag and no order)");
});


After(() => {
    cy.log("Run after every scenario (order 0)");
});
  
After(() => {
    cy.log("Run after every scenario (order 1)");
});


BeforeStep(() => {
    cy.log("Run before every step");
});
  
AfterStep(() => {
    cy.log("Run after every step");
});

Given('I am on login page', function(){
    //cy.visit("https://rohit-automation.netlify.app/")
    cy.log("i am on login page")
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

When('I enter {string} and {string}', function(username, password){
    loginPage.typeUsername(username)
    loginPage.typePassword(password)
})

When('I enter in textbox', function(){
    loginPage.typeTextbox('Hello')
})

When('I click on radiobutton', function(){
    loginPage.clickRadiobutton()
})
