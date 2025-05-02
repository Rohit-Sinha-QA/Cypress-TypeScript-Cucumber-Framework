import { Given, When, Then, Before, After, BeforeStep, AfterStep  } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/loginPage";

const loginPage = new LoginPage();

  
Before(function(){
    cy.log("Run before every scenario");
});
  
Before({tags: "@smoke"}, function(){
    cy.log("Run before every smoke tag scenario");
});

BeforeStep(function(){
    cy.log("Run before every step");
});

AfterStep(function(){
    cy.log("Run after every step");
});

After(function(){
    cy.log("Run after every scenario");
});


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
