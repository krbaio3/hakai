import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeroeComponent } from './show-heroe.component';

describe('ShowHeroeComponent', () => {
  let component: ShowHeroeComponent;
  let fixture: ComponentFixture<ShowHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
