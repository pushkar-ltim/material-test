import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTablePracticeStickyHeaderComponent } from './material-table-practice-sticky-header.component';

describe('MaterialTablePracticeStickyHeaderComponent', () => {
  let component: MaterialTablePracticeStickyHeaderComponent;
  let fixture: ComponentFixture<MaterialTablePracticeStickyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTablePracticeStickyHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTablePracticeStickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
