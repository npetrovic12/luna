import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalImageSliderComponent } from './horizontal-image-slider.component';

describe('HorizontalImageSliderComponent', () => {
  let component: HorizontalImageSliderComponent;
  let fixture: ComponentFixture<HorizontalImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalImageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
