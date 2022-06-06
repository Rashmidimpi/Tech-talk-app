import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // Ecxecutes before each testcase
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      // Converts angular templates into standard HTML templates
       // Compiling angular language into basic HTML that can be understood by a headless browser (browser without UI)
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Object of class
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'utility-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('utility-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Detect changes in UI
    fixture.detectChanges();
    // HTML DOM element rendered by the component
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('app-header-bar').length===1).toBe(true);
  });
});
