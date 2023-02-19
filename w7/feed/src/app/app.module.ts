import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts.component';
import { IdentifyPipe } from './pipes/identify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    IdentifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
