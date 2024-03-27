import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsVisualizatorComponent } from './news-visualizator.component';

describe('NewsVisualizatorComponent', () => {
  let component: NewsVisualizatorComponent;
  let fixture: ComponentFixture<NewsVisualizatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsVisualizatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsVisualizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
