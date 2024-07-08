class LoginPage {
  visit() {
    const url = 'https://qaplayground.dev/apps/verify-account/';
    cy.visit(url);
    cy.log(`${url} is opened`);
  }

  getCodecontainer() {
    return cy.xpath('//input[@type = "number"]');
  }

  getConforamtionCode() {
    cy.xpath('//small[@class = "info"]').invoke('text').then((text) => {
        cy.log(`Got the following text ${text}`);
        return text;
      });
  }

  getSuccessMessage() {
    return cy.xpath('//small[@class = "info success"]');
  }

  login() {
    charArray = this.getConforamtionCode().charArray;
    array = this.getCodecontainer();
    for (let index = 0; index < array.length; index++) {
        array[index].type(charArray[index]);
    }
    this.getSuccessMessage().should('be.visible');
    cy.screenshot('login_page');
    cy.log('Screenshot was created')
  }
}

export default LoginPage;