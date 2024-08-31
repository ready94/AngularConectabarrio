import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRightPanelComponent } from './admin-right-panel.component';

describe('AdminRightPanelComponent', () => {
  let component: AdminRightPanelComponent;
  let fixture: ComponentFixture<AdminRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRightPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
