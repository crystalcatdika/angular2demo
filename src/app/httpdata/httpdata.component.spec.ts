import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpdataComponent } from './httpdata.component';

describe('HttpdataComponent', () => {
  let component: HttpdataComponent;
  let fixture: ComponentFixture<HttpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
