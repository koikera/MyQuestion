import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardsComponent } from './components/profile/cards/cards.component';
import { SpecsProfileComponent } from './components/profile/specs-profile/specs-profile.component';
import { FeedComponent } from './components/profile/feed/feed.component';
import { ProfileModule } from './components/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
