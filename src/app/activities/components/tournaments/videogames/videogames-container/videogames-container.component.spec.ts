import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesContainerComponent } from './videogames-container.component';

describe('VideogamesContainerComponent', () => {
  let component: VideogamesContainerComponent;
  let fixture: ComponentFixture<VideogamesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogamesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideogamesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
