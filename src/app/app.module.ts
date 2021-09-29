import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { RefinementListComponent } from './refinement-list/refinement-list.component';

@NgModule({
  declarations: [		
    AppComponent,
      ResultsComponent,
      RefinementListComponent
   ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
