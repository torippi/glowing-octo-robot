import { Component, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
selector: 'app-iframe',
template: `<iframe #iframe width="100%" height="100%"></iframe>`,
styles: [ 'iframe { min-height: 400px; }' ]

})

export class IframeComponent  {
    name = 'Angular';
    src = '';

@ViewChild('iframe') iframe: ElementRef | undefined;
    constructor(private  route: ActivatedRoute,) {
    }
ngAfterViewInit() {

this.route.url.subscribe((urlSegments: any) => {
    const routes = urlSegments[0];
    console.log(urlSegments[0]);
    if(routes.path === 'iframe1') {
    this.src = 'https://rawgit.com/start-angular/ani-theme/master/dist/#/dashboard/overview';
    } else {
    this.src = 'https://rawgit.com/start-angular/ani-theme/master/dist/#/dashboard/reports';
    }
    

if (this.iframe) {
    this.iframe.nativeElement.src = this.src;
}
});
// DEVELOPMENT TESTING ONLY

}
}
