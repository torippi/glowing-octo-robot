import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        YouTubePlayerModule
      ],
      declarations: [
        AppComponent,
        YoutubePlayerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'N-Music'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('N-Music');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('N-Music app is running!');
  });

  it('should lender youtube ', () => {
    const fixture = TestBed.createComponent(YoutubePlayerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('start youtube button name', () => {
    const fixture = TestBed.createComponent(YoutubePlayerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-container')?.textContent).toContain('再生');
    expect(compiled.querySelector('.card-container')?.textContent).toContain('停止');
  });

});
