import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WordSynonymsPair } from '../model/word-synonym-pair';

@Injectable({providedIn: 'root'})
export class SynonymDictionaryService {

  constructor(private httpClient: HttpClient) {}

  public getSynonyms(word: string): Observable<string[]> {
    const getSynonymsEndpoint = `synonym/${word}`;

    return this.httpClient.get<string[]>(getSynonymsEndpoint);
  }

  public addSynonyms(wordSynonymsPair: WordSynonymsPair[]): Observable<boolean> {
    return this.httpClient.post<boolean>('synonym', wordSynonymsPair);
  }
}
