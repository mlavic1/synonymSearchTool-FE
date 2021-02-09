import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WordSynonymsPair } from '../model/word-synonym-pair';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class SynonymDictionaryService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getSynonyms(word: string): Observable<string[]> {
    const getSynonymsEndpoint = this.baseUrl + `synonym/${word}`;

    return this.httpClient.get<string[]>(getSynonymsEndpoint);
  }

  public addSynonyms(wordSynonymsPair: WordSynonymsPair[]): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + 'synonym', wordSynonymsPair);
  }
}
