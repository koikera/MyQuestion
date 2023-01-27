import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from '../feed/feed.component';
import { CardsComponent } from '../cards/cards.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class SpecsProfileModule { }
