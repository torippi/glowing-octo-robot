import { Component, OnInit } from "@angular/core";

let apiLoaded = false;

// example-component.ts
@Component({
    template: '<youtube-player videoId="PRQCAL_RMVo"></youtube-player>',
    selector: 'youtube-player-example',
})

export class YoutubePlayerExample implements OnInit {
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
}