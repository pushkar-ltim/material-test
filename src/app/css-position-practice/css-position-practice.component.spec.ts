import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPositionPracticeComponent } from './css-position-practice.component';

describe('CssPositionPracticeComponent', () => {
  let component: CssPositionPracticeComponent;
  let fixture: ComponentFixture<CssPositionPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssPositionPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPositionPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
