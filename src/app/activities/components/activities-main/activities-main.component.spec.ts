import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesMainComponent } from './activities-main.component';

describe('ActivitiesMainComponent', () => {
  let component: ActivitiesMainComponent;
  let fixture: ComponentFixture<ActivitiesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
