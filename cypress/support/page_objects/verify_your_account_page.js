import MainPage from "./main_page";

class VerifyYourAccount {
  visit() {
    const url = 'https://qaplayground.dev/apps/verify-account/';
    new MainPage().openVerifyAccountPage();
    cy.url().should('eq', url);
  }

  getCodeContainer() {
    return cy.xpath('//input[@type = "number"]');
  }

  getConfirmationCode() {
    return cy.xpath('//small[@class = "info"]')
      .invoke('text')
      .then((text) => {
        const cleanedText = text.replace(/[^0-9\W]+/g, "").trim();
        console.log(cleanedText);
        return cleanedText.split('-');
      });
  }

  isSuccessMessageVisible() {
    return cy.xpath('//small[@class = "info success"]').should('be.visible');
  }

  login() {
    this.getConfirmationCode().then((charArray) => {
      this.getCodeContainer().should('have.length', charArray.length)
        .each((element, index) => {
          cy.wrap(element).type(charArray[index]);
          cy.log(`Typing ${charArray[index]}`);
        });

      this.isSuccessMessageVisible();
      const screenshot_name = 'login_page';
      cy.screenshot(screenshot_name);
      cy.log(`Screenshot ${screenshot_name} was created`);
    });
  }


  isUrlCorrect() {
    cy.url().should('include', '/apps/verify-account/');
  }
}
export default VerifyYourAccount;