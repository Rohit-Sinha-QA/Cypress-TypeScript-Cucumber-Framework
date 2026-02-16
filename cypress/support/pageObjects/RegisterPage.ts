class RegisterPage {
  // URL
  url = "https://rohit-automation.netlify.app/signuppage/signup";

  // Locators (update if needed)
  emailInput = "#email";
  passwordInput = "#password";
  reenterPasswordInput = "#confirmPassword";
  submitBtn = "button[type='submit']";
  successMsg = "#message"; // if any success text exists

  openRegisterPage(): void {
    cy.visit(this.url);
  }

  typeEmail(email: string): void {
    cy.get(this.emailInput).type(email);
  }

  typePassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  typeReenterPassword(password: string): void {
    cy.get(this.reenterPasswordInput).type(password);
  }

  clickSubmit(): void {
    cy.get(this.submitBtn).click();
  }

}

export default RegisterPage;
