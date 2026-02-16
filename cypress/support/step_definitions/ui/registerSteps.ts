import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../../pageObjects/RegisterPage";

const registerPage = new RegisterPage();

Given("I open the register page", () => {
  registerPage.openRegisterPage();
});

When("I register with email {string}, and password {string}", (email: string, password: string) => {
  registerPage.typeEmail(email);
  registerPage.typePassword(password);
  registerPage.typeReenterPassword(password);
  registerPage.clickSubmit();
});
