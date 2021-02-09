import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SynonymDictionaryComponent } from './components/synonym-dictionary/synonym-dictionary.component';
import { SynonymDictionarySearchComponent } from './components/synonym-dictionary-search/synonym-dictionary-search.component';
import { AppComponent } from './components/app.component';
import { SynonymDictionaryContentComponent } from './components/synonym-dictionary-content/synonym-dictionary-content.component';
import { AddSynonymsDialogComponent } from './components/add-synonyms-dialog/add-synonyms-dialog.component';

@NgModule({
            declarations: [
              AppComponent,
              SynonymDictionarySearchComponent,
              AddSynonymsDialogComponent,
              SynonymDictionaryComponent,
              SynonymDictionaryContentComponent
            ],
            imports: [
              BrowserModule,
              BrowserAnimationsModule,
              HttpClientModule,
              MatTabsModule,
              MatIconModule,
              MatInputModule,
              MatButtonModule,
              MatChipsModule,
              MatDividerModule,
              MatDialogModule,
              MatTooltipModule,
              MatSnackBarModule,
              RouterModule,
              ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
