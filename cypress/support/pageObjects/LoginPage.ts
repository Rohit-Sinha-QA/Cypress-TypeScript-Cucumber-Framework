class LoginPage {
  readonly url = "https://rohit-automation.netlify.app/";
  readonly username = "#user";
  readonly password = "#pass";
  readonly submitButton = "button[type='submit']";
  readonly heading = "h1";

  open(): void {
    cy.visit(this.url);
  }

  enterUsername(user: string): void {
    cy.get(this.username).clear().type(user);
  }

  enterPassword(pass: string): void {
    cy.get(this.password).clear().type(pass);
  }

  clickLogin(): void {
    cy.get(this.submitButton).click();
  }

  verifyDashboard(): void {
    cy.get(this.heading).should("contain.text", "Dashboard");
  }
}

export default LoginPage;
