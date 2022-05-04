import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipoesFilterComponent } from './recipoes-filter.component';

describe('RecipoesFilterComponent', () => {
  let component: RecipoesFilterComponent;
  let fixture: ComponentFixture<RecipoesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipoesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipoesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
