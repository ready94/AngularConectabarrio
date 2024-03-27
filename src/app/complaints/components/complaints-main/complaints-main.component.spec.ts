import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsMainComponent } from './complaints-main.component';

describe('ComplaintsMainComponent', () => {
  let component: ComplaintsMainComponent;
  let fixture: ComponentFixture<ComplaintsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
