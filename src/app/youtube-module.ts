// example-module.ts
import { NgModule, Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerExample} from './youtube-component';

@NgModule({
    imports: [YouTubePlayerModule],
    declarations: [YoutubePlayerExample],
})

export class YoutubePlayerExampleModule {
}