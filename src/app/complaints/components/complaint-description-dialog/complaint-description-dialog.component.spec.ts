import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDescriptionDialogComponent } from './complaint-description-dialog.component';

describe('ComplaintDescriptionDialogComponent', () => {
  let component: ComplaintDescriptionDialogComponent;
  let fixture: ComponentFixture<ComplaintDescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintDescriptionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
