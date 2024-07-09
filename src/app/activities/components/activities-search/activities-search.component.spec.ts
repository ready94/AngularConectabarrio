import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSearchComponent } from './activities-search.component';

describe('ActivitiesSearchComponent', () => {
  let component: ActivitiesSearchComponent;
  let fixture: ComponentFixture<ActivitiesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
