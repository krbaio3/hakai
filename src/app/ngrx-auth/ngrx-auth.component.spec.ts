import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxAuthComponent } from './ngrx-auth.component';

describe('NgrxAuthComponent', () => {
  let component: NgrxAuthComponent;
  let fixture: ComponentFixture<NgrxAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
