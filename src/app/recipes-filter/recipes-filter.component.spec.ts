import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFilterComponent } from './recipes-filter.component';

describe('RecipoesFilterComponent', () => {
  let component: RecipesFilterComponent;
  let fixture: ComponentFixture<RecipesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
