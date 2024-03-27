import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsContainerComponent } from './sports-container.component';

describe('SportsContainerComponent', () => {
  let component: SportsContainerComponent;
  let fixture: ComponentFixture<SportsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
