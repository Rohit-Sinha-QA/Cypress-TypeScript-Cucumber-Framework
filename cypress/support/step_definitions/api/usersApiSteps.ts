import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let payload: any;
let responseData: any;

Given("I have create user payload", () => {
  payload = {
    firstName: "Rohit",
    lastName: "Sinha",
    age: 28,
  };
});

When("I send POST request to create user", () => {
  cy.request({
    method: "POST",
    url: "https://dummyjson.com/users/add",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  }).then((response) => {
    responseData = response;
  });
});

Then(
  "the create user response status should be {int}",
  (statusCode: number) => {
    expect(responseData.status).to.eq(statusCode);
  }
);

Then("the response should contain {string}", (key: string) => {
  expect(responseData.body).to.have.property(key);
});

// -------------------------------

Given("I have update user payload", () => {
  payload = {
    firstName: "Rohit Updated",
    age: 30,
  };
});

When("I send PUT request to update user", () => {
  cy.request({
    method: "PUT",
    url: "https://dummyjson.com/users/1",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  }).then((response) => {
    responseData = response;
  });
});

Then(
  "the update user response status should be {int}",
  (statusCode: number) => {
    expect(responseData.status).to.eq(statusCode);
  }
);
