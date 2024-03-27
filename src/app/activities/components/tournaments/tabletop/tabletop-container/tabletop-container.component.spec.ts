import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletopContainerComponent } from './tabletop-container.component';

describe('TabletopContainerComponent', () => {
  let component: TabletopContainerComponent;
  let fixture: ComponentFixture<TabletopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletopContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabletopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
