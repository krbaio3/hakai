import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpotyComponent } from './home-spoty.component';

describe('HomeSpotyComponent', () => {
  let component: HomeSpotyComponent;
  let fixture: ComponentFixture<HomeSpotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSpotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
