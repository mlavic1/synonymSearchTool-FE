import { SynonymDictionarySelect } from './synonym-dictionary.select';

export class SynonymDictionaryPage {

  public static assertAddDialogVisible(): void {
    cy.get(SynonymDictionarySelect.addDialog).should('be.visible');
  }

  public static assertAddDialogNotVisible(): void {
    cy.get(SynonymDictionarySelect.addDialog).should('not.exist');
  }

  public static setWordSynonymValue(word: string, synonym: string): void {
    cy.get(SynonymDictionarySelect.addButton).click().wait(200);

    if (word) {
      cy.get(SynonymDictionarySelect.dialogWordInput).type(word);
    }
    if (synonym) {
      cy.get(SynonymDictionarySelect.dialogSynonymInput).type(synonym);
    }

    cy.get(SynonymDictionarySelect.dialogAddButton).click().wait(300);
  }

  public static assertSnackbarVisibleWithText(text: string): void {
    cy.get('simple-snack-bar').should('contain', text);
  }

  public static assertSynonymsDisplayed(synonyms: string[]): void {
    synonyms.forEach(synonym => cy.get(SynonymDictionarySelect.synonymResult).should('contain', synonym));
  }
}
