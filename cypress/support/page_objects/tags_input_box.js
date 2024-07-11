import { default as MainPage } from "./main_page";

class TagsPage {
    constructor() {
        new MainPage().openTagBoxPage();
    }

    enterTags() {
        cy.fixture('tags').then((tags) => {
            tags.forEach(tag => {
                cy.xpath('//input[@type="text"]').type(`${tag.color}{enter}`);
                cy.log(tag.color);
            });
        });
    }

    getTagsCounter() {
        return cy.xpath('//p/span').invoke('text').then(text => {
            return text.trim();
        });
    }
}

export default TagsPage;