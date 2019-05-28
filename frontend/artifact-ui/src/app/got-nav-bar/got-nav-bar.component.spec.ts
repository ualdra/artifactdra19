import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotNavBarComponent } from './got-nav-bar.component';

describe('GotNavBarComponent', () => {
  let component: GotNavBarComponent;
  let fixture: ComponentFixture<GotNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
