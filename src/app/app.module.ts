import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeComponent } from './iframe.component';

import { RouterModule, Route } from '@angular/router'

const ROUTES: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: AppComponent },
  {
    path: 'classic', children: [
      { path: '**', component: IframeComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
