import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { RoomComponent } from './components/room/room.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeroComponent } from './components/hero/hero.component';
import { ScrollComponent } from './components/scroll/scroll.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MatrixComponent,
    ParallaxComponent,
    RoomComponent,
    GalleryComponent,
    
    HomepageComponent,
         HeroComponent,
         ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
