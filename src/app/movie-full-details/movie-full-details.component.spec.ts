import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullDetailsComponent } from './movie-full-details.component';

describe('MovieFullDetailsComponent', () => {
  let component: MovieFullDetailsComponent;
  let fixture: ComponentFixture<MovieFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFullDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
