import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { GuestBookComponent } from './components/guest-book/guest-book.component';
import { RegistryComponent } from './components/registry/registry.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomePictureCarouselComponent } from './components/home-picture-carousel/home-picture-carousel.component';
import { GuestInfoComponent } from './components/guest-info/guest-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    GuestBookComponent,
    RegistryComponent,
    RsvpComponent,
    HomeHeaderComponent,
    HomePictureCarouselComponent,
    GuestInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
