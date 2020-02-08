import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomePictureCarouselComponent } from './home-picture-carousel/home-picture-carousel.component';
import { GuestInfoComponent } from './guest-info/guest-info.component';

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
