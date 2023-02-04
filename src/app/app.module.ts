import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubePlayerExampleModule } from './youtube-module';

@NgModule({
  // このモジュールに属するコンポーネント
  declarations: [
    AppComponent
  ],
  // このモジュールで利用する他のモジュール
  imports: [
    BrowserModule,
    AppRoutingModule,
    YoutubePlayerExampleModule
  ],
  // サービスクラスを登録。APIとかで利用。
  providers: [],
  // アプリで最初に起動すべき最上位のコンポーネント（＝ルートコンポーネント）
  bootstrap: [AppComponent]
})
export class AppModule { }
