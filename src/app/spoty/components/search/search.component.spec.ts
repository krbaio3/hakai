import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpotyComponent } from './search-spoty.component';

describe('SearchSpotyComponent', () => {
  let component: SearchSpotyComponent;
  let fixture: ComponentFixture<SearchSpotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSpotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
