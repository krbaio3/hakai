import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSpotyComponent } from './nav-bar-spoty.component';

describe('NavBarSpotyComponent', () => {
  let component: NavBarSpotyComponent;
  let fixture: ComponentFixture<NavBarSpotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSpotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSpotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
