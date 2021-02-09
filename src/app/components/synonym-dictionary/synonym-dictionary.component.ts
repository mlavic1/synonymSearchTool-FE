import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { SynonymDictionaryService } from '../../services/synonym-dictionary-service';
import { WordSynonymsPair } from '../../model/word-synonym-pair';

@Component({
             selector: 'app-synonym-dictionary',
             templateUrl: './synonym-dictionary.component.html',
             styleUrls: ['./synonym-dictionary.component.less']
           })
export class SynonymDictionaryComponent implements OnInit {

  public currentWord: string;
  public synonyms$: Observable<string[]>;

  constructor(private synonymDictionaryService: SynonymDictionaryService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public getSynonyms(word: string): void {
    this.currentWord = word;
    this.synonyms$ = this.synonymDictionaryService.getSynonyms(word);
  }

  public addSynonyms(wordSynonymsPair: WordSynonymsPair[]): void {
    this.synonymDictionaryService.addSynonyms(wordSynonymsPair).subscribe(() => {
      this.showSnackbar('Synonyms successfully added');
    }, () => {
      this.showSnackbar('Oops! Something went wrong!');
    });
  }

  private showSnackbar(text: string): void {
    this.snackbar.open(text, 'Close', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    });
  }
}
