import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetalisComponent } from './teacherDetalis.component';

describe('TeacherDetalisComponent', () => {
  let component: TeacherDetalisComponent;
  let fixture: ComponentFixture<TeacherDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
