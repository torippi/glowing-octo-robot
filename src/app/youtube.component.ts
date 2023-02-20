import { Component } from '@angular/core';

let apiLoaded = false;

@Component({
    selector: 'app-youtube-player',
    template: `
        <div class="card-container">
        <button (click)="onStartClick($event)">
            再生
        </button>
        <button (click)="onStopClick($event)">
            停止
        </button>
    </div>
        <youtube-player videoId="{{VideoId}}" (ready)="onPlayerReady($event)" (stateChange)="onStateChange($event)"teChange></youtube-player>
    <a>{{VideoState}}</a>
    `,
    styleUrls: ['./app.component.scss']
})

export class YoutubePlayerComponent {
    VideoIds = ['WnVDf7Wkg4Y', 'JHq6kYWdgNo'];
    VideoId = 'WnVDf7Wkg4Y';
    VideoState = 0;
    VideoPlayer: any;

    // Component Start 
    ngOnInit() {
        this.VideoId = this.VideoIds[this.RandomInt(this.VideoIds.length)];
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
        this.VideoPlayer = event.target;
        event.target.mute();
        event.target.unMute();
        event.target.setVolume(20);
        //event.target.playVideo();
    }

    onStateChange(event: any) {
        // Detect and operate every time Video status changes
        // https://developers.google.com/youtube/iframe_api_reference?hl=ja#:~:text=player.getPlayerState()%3ANumber
        this.VideoState = event.target.getPlayerState();
        if (this.VideoState == 0) {
            this.VideoId = this.VideoIds[this.RandomInt(this.VideoIds.length)];
            event.target.playVideo();
        }
        else if (this.VideoState == 5) {
            event.target.playVideo();
        }
    }

    onStartClick(event: any){
        this.VideoPlayer.playVideo();
    }

    onStopClick(event: any){
        this.VideoPlayer.pauseVideo();
    }

    RandomInt(ram: any){
        return Math.floor( Math.random() * ram );
    }
}
