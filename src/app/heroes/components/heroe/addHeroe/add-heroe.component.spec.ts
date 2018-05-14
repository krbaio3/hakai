import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroeComponent } from './add-heroe.component';

describe('AddHeroeComponent', () => {
  let component: AddHeroeComponent;
  let fixture: ComponentFixture<AddHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
