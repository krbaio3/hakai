import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHeroeComponent } from './remove-heroe.component';

describe('RemoveHeroeComponent', () => {
  let component: RemoveHeroeComponent;
  let fixture: ComponentFixture<RemoveHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
