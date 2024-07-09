import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesNewFormComponent } from './activities-new-form.component';

describe('ActivitiesNewFormComponent', () => {
  let component: ActivitiesNewFormComponent;
  let fixture: ComponentFixture<ActivitiesNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesNewFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
