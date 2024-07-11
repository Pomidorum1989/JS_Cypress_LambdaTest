import TagsPage from '../support/page_objects/tags_input_box';
import VerifyYourAccount from '../support/page_objects/verify_your_account_page';

describe('QA playgroung: Verify Your Account', () => {
  it('User should log in successfully to QA playgroung page', () => {
    const loginPage = new VerifyYourAccount();
    loginPage.visit();
    loginPage.login();
    loginPage.isUrlCorrect();
  });
});

describe('QA playgroung: Verify Tags Box', () => {
  it('8 tags should be added', () => {
    const constTagPage = new TagsPage();
    constTagPage.enterTags();
    constTagPage.getTagsCounter().should('eq', '0');
  });
});