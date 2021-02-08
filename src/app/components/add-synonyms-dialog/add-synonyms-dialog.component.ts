import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { WordSynonymsPair } from '../../model/word-synonym-pair';

@Component({
             selector: 'app-synonyms-dialog',
             templateUrl: './add-synonyms-dialog.component.html',
             styleUrls: ['./add-synonyms-dialog.component.less'],
             encapsulation: ViewEncapsulation.None,
           })
export class AddSynonymsDialogComponent implements OnInit {

  public formGroup: FormGroup;
  public infoAboutAddingSynonyms = 'You can add multiple words with synonyms by clicking on Add button. Please divide synonyms with comma " , ".';

  constructor(private dialogRef: MatDialogRef<AddSynonymsDialogComponent>, private fb: FormBuilder, private snackbar: MatSnackBar) {

  }

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
                                     words: this.fb.array([this.fb.group({ word: '' })]),
                                     synonyms: this.fb.array([this.fb.group({ synonyms: '' })])
                                   });
  }

  public getSynonyms(): FormArray {
    return this.formGroup.get('synonyms') as FormArray;
  }

  public getWords(): FormArray {
    return this.formGroup.get('words') as FormArray;
  }

  public addNewWordSynonymPair(): void {
    this.getWords().push(this.fb.group({ word: '' }));
    this.getSynonyms().push(this.fb.group({ synonyms: '' }));

  }

  public addSynonyms(): void {
    this.dialogRef.close(this.getWordSynonymPairs());
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  private getWordSynonymPairs(): WordSynonymsPair[] {
    const wordSynonymPairs: WordSynonymsPair[] = [];

    for (const index in this.formGroup.value.words) {
      if (this.shouldAddWordSynonymsPair(index)) {
        wordSynonymPairs.push(
          {
            word: this.formGroup.value.words[index].word,
            synonyms: this.formGroup.value.synonyms[index].synonyms.split(',')
          });
      } else {
        this.snackbar.open('Some of word/synonym pair fields are empty', 'Close', {
          duration: 3000,
          horizontalPosition: 'start',
          verticalPosition: 'bottom',
        });
      }
    }

    return wordSynonymPairs;
  }

  private shouldAddWordSynonymsPair(index: string): boolean {
    return this.formGroup.value.words.hasOwnProperty(index) &&
           this.formGroup.value.words[index]?.word !== '' &&
           this.formGroup.value.synonyms[index]?.synonyms !== '';
  }

}
