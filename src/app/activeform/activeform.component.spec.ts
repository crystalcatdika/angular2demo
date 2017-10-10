import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveformComponent } from './activeform.component';

describe('ActiveformComponent', () => {
  let component: ActiveformComponent;
  let fixture: ComponentFixture<ActiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
