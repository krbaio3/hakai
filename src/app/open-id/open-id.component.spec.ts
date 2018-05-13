import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIdComponent } from './open-id.component';

describe('OpenIdComponent', () => {
  let component: OpenIdComponent;
  let fixture: ComponentFixture<OpenIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
