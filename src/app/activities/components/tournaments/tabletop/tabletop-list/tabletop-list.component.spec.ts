import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletopListComponent } from './tabletop-list.component';

describe('TabletopListComponent', () => {
  let component: TabletopListComponent;
  let fixture: ComponentFixture<TabletopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletopListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabletopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
