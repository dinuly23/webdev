import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WhyBoxComponent } from './components/why-box/why-box.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SubFooterLinksComponent } from './components/sub-footer-links/sub-footer-links.component';

@NgModule({
  declarations: [
    AppComponent,
    WhyBoxComponent,
    TestimonialComponent,
    FooterLinksComponent,
    NavigationBarComponent,
    SubFooterLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
