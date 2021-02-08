import { ChangeDetectorRef, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AddSynonymsDialogComponent } from '../add-synonyms-dialog/add-synonyms-dialog.component';
import { WordSynonymsPair } from '../../model/word-synonym-pair';

@Component({
             selector: 'app-synonym-dictionary-search',
             templateUrl: './synonym-dictionary-search.component.html',
             styleUrls: ['./synonym-dictionary-search.component.less'],
             encapsulation: ViewEncapsulation.None,
           })
export class SynonymDictionarySearchComponent {
  @Output() public readonly searchForSynonymsEmitter = new EventEmitter<string>();
  @Output() public readonly addNewWorSynonyms = new EventEmitter<WordSynonymsPair[]>();

  public valueControl = new FormControl('');
  public placeholder = 'Search for synonyms';
  public iconName = 'assets/icons/add.svg';

  constructor(private changeDetector: ChangeDetectorRef, private dialog: MatDialog) { }

  public openDialog(): void {
    this.dialog.open(AddSynonymsDialogComponent).afterClosed().subscribe((result: WordSynonymsPair[]) => {
      if (result?.length > 0) {
        this.addNewWorSynonyms.emit(result);
      }
    });
  }

  public searchForSynonyms(): void {
    if (this.valueControl.value) {
      this.searchForSynonymsEmitter.emit(this.valueControl.value);
      this.valueControl.setValue('');
    }
  }
}
