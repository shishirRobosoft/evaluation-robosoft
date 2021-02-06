import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCardsComponent } from './news-cards/news-cards.component';
import { NewsDetailsComponent } from './news-details/news-details.component';



@NgModule({
  declarations: [NewsCardsComponent,NewsDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[NewsCardsComponent,NewsDetailsComponent]
})
export class SharedModule { }
