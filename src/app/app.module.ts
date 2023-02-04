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
  // このモジュールに属するコンポーネント
  declarations: [
    AppComponent,
    IframeComponent
  ],
  // このモジュールで利用する他のモジュール
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  // サービスクラスを登録。APIとかで利用。
  providers: [],
  // アプリで最初に起動すべき最上位のコンポーネント（＝ルートコンポーネント）
  bootstrap: [AppComponent]
})
export class AppModule { }
