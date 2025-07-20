import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTablePracticeComponent } from './material-table-practice.component';

describe('MaterialTablePracticeComponent', () => {
  let component: MaterialTablePracticeComponent;
  let fixture: ComponentFixture<MaterialTablePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTablePracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTablePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
