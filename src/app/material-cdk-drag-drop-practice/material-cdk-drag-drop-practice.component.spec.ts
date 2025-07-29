import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCdkDragDropPracticeComponent } from './material-cdk-drag-drop-practice.component';

describe('MaterialCdkDragDropPracticeComponent', () => {
  let component: MaterialCdkDragDropPracticeComponent;
  let fixture: ComponentFixture<MaterialCdkDragDropPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCdkDragDropPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCdkDragDropPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
