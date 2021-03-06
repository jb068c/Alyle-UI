import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCard, LyCardContent, LyCardActions, LyCardMedia } from './card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia],
  declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
})
export class LyCardModule { }
