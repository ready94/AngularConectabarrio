import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementMainComponent } from './advertisement-main.component';

describe('AdvertisementMainComponent', () => {
  let component: AdvertisementMainComponent;
  let fixture: ComponentFixture<AdvertisementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertisementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
