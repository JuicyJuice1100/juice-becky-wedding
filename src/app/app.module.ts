import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


// Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { RegistryComponent } from './components/registry/registry.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VenueComponent } from './components/venue/venue.component';
import { HeaderPhotoComponent } from './components/header-photo/header-photo.component';

// Slick
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InstagramComponent } from './components/instagram/instagram.component';

// ngx-scroll
import { NgxPageScrollModule  } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HotelsComponent } from './components/hotels/hotels.component';
import { ImageService } from './services/image/image.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    RegistryComponent,
    RsvpComponent,
    HeaderComponent,
    PhotosComponent,
    VenueComponent,
    HeaderPhotoComponent,
    InstagramComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MDBBootstrapModule,
    NgbModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    SlickCarouselModule,
    NgxPageScrollCoreModule.forRoot({duration: 1000}),
    NgxPageScrollModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
