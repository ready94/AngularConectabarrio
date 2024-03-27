import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsMainComponent } from './sports-main.component';

describe('SportsMainComponent', () => {
  let component: SportsMainComponent;
  let fixture: ComponentFixture<SportsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
