import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SpecsProfileComponent } from './specs-profile/specs-profile.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [
    CardsComponent,
    SpecsProfileComponent,
    FeedComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
