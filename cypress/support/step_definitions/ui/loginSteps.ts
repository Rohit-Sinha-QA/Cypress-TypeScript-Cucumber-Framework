import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DataTable } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/LoginPage";

const loginPage = new LoginPage();

Given("I open the login page", () => {
  loginPage.open();
});

When("I login with username {string} and password {string}", (user: string, pass: string) => {
  loginPage.enterUsername(user);
  loginPage.enterPassword(pass);
  loginPage.clickLogin();
});

When("I login using below data table", (dataTable: DataTable) => {
  const data = dataTable.hashes()[0];

  loginPage.enterUsername(data.username);
  loginPage.enterPassword(data.password);
  loginPage.clickLogin();
});

Then("I should see dashboard page", () => {
  loginPage.verifyDashboard();
});
