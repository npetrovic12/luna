import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxGalleryComponent } from './parallax-gallery.component';

describe('ParallaxGalleryComponent', () => {
  let component: ParallaxGalleryComponent;
  let fixture: ComponentFixture<ParallaxGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
