import { NgModule, Component, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
    selector: 'app-youtube-player',
    template: `
    <div class="player-container">
        <youtube-player videoId="{{VideoId}}" (ready)="onPlayerReady($event)" (stateChange)="onStateChange($event)"teChange></youtube-player>
    </div>
    <a>{{VideoState}}</a>
    `,
    styleUrls: ['./app.component.scss']
})
export class YoutubePlayerComponent {
    VideoId = 'WnVDf7Wkg4Y';
    VideoState = 0;

    // Component Start 
    ngOnInit() {
        if (!apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            apiLoaded = true;
        }
    }

    // Auto play after loading
    onPlayerReady(event: any) {
        event.target.mute();
        event.target.unMute();
        event.target.setVolume(20);        
        //event.target.playVideo();
    }

    onStateChange(event: any){
        // Detect and operate every time Video status changes
        // https://developers.google.com/youtube/iframe_api_reference?hl=ja#:~:text=player.getPlayerState()%3ANumber
        this.VideoState = event.target.getPlayerState();
        if (this.VideoState == 0){
            this.VideoId = 'KYpv7FUq_yY';
        }
        else if (this.VideoState == 5){
            event.target.playVideo();
        }
    }
}
