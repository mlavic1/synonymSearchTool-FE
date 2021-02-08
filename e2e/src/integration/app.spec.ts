import { SynonymDictionarySelect } from '../synonym-dictionary/synonym-dictionary.select';
import { SynonymDictionaryPage } from '../synonym-dictionary/synonym-dictionary.page';

describe('Reeinvent app, e2e testing', () => {
  beforeEach(() => cy.visit('/'));

  it('should display synonym dictionary page', () => {
    cy.get(SynonymDictionarySelect.synonymDictionaryId).should('exist');
  });

  it('should add synonyms dialog be visible', () => {
    cy.get(SynonymDictionarySelect.addButton).click();
    SynonymDictionaryPage.assertAddDialogVisible();
  });

  it('should not add word with synonyms if some of fields are empty', () => {
    SynonymDictionaryPage.setWordSynonymValue(null, 'synonym');

    SynonymDictionaryPage.assertAddDialogNotVisible();
    SynonymDictionaryPage.assertSnackbarVisibleWithText('Some of word/synonym pair fields are empty');
  });

  it('should add word and synonyms', () => {
    SynonymDictionaryPage.setWordSynonymValue('word1', 'synonym1');

    SynonymDictionaryPage.assertAddDialogNotVisible();
    SynonymDictionaryPage.assertSnackbarVisibleWithText('Synonyms successfully added');
  });

  it('should show synonyms for typed word', () => {
    cy.get(SynonymDictionarySelect.searchInput).type('word1');

    cy.get(SynonymDictionarySelect.searchInputButton).click().wait(200);

    SynonymDictionaryPage.assertSynonymsDisplayed(['synonym1']);

    SynonymDictionaryPage.setWordSynonymValue('synonym1', 'synonymForSynonym1');

    cy.get(SynonymDictionarySelect.searchInput).type('word1');
    cy.get(SynonymDictionarySelect.searchInputButton).click().wait(200);

    SynonymDictionaryPage.assertSynonymsDisplayed(['synonym1', 'synonymForSynonym1']);
  });
});
