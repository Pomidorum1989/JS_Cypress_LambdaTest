import LoginPage from '../pageObjects/LoginPage';

describe('Google Page', () => {
  it('should log in successfully', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login();
    cy.url().should('include', '/apps/verify-account/');
  });
});