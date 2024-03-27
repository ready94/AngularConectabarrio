import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesMainComponent } from './videogames-main.component';

describe('VideogamesMainComponent', () => {
  let component: VideogamesMainComponent;
  let fixture: ComponentFixture<VideogamesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogamesMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideogamesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
