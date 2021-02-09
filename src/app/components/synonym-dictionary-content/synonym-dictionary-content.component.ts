import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'app-synonym-dictionary-content',
             templateUrl: './synonym-dictionary-content.component.html',
             styleUrls: ['./synonym-dictionary-content.component.less'],
             encapsulation: ViewEncapsulation.None
           })
export class SynonymDictionaryContentComponent {
  @Input() public currentSearchedWord: string;
  @Input() public currentSynonyms: string[] = [];
}
