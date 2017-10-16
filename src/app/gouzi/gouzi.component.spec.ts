import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GouziComponent } from './gouzi.component';

describe('GouziComponent', () => {
  let component: GouziComponent;
  let fixture: ComponentFixture<GouziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GouziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GouziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
