import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRatingTableComponent } from './movie-rating-table.component';

describe('MovieRatingTableComponent', () => {
  let component: MovieRatingTableComponent;
  let fixture: ComponentFixture<MovieRatingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieRatingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRatingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
