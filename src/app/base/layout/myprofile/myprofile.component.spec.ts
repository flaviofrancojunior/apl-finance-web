import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyprofileComponent } from './myprofile.component';
import { MyprofileModule } from './myprofile.module';

describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let fixture: ComponentFixture<MyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MyprofileModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
