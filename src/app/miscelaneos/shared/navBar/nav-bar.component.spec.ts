import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMiscelaneosComponent } from './nav-bar-miscelaneos.component';

describe('NavBarMiscelaneosComponent', () => {
  let component: NavBarMiscelaneosComponent;
  let fixture: ComponentFixture<NavBarMiscelaneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarMiscelaneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMiscelaneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
