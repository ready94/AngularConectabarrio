import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsContainerComponent } from './complaints-container.component';

describe('ComplaintsContainerComponent', () => {
  let component: ComplaintsContainerComponent;
  let fixture: ComponentFixture<ComplaintsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
