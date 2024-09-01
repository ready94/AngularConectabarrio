import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDescriptionDialogComponent } from './new-description-dialog.component';

describe('NewDescriptionDialogComponent', () => {
  let component: NewDescriptionDialogComponent;
  let fixture: ComponentFixture<NewDescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDescriptionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
