import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainComponent } from './news-main.component';

describe('NewsMainComponent', () => {
  let component: NewsMainComponent;
  let fixture: ComponentFixture<NewsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
