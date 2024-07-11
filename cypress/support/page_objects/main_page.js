class MainPage {
    constructor() {
        cy.visit('');
    }

     openVerifyAccountPage() {
        cy.xpath('//h3[text() = "Verify Your Account"]').click();
    }

    openTagBoxPage() {
        cy.xpath('//h3[text() = "Tags Input Box"]').click();
    }
}

export default MainPage;