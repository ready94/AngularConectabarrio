import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletopMainComponent } from './tabletop-main.component';

describe('TabletopMainComponent', () => {
  let component: TabletopMainComponent;
  let fixture: ComponentFixture<TabletopMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletopMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabletopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
