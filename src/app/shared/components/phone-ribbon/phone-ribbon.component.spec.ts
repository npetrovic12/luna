import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneRibbonComponent } from './phone-ribbon.component';

describe('PhoneRibbonComponent', () => {
  let component: PhoneRibbonComponent;
  let fixture: ComponentFixture<PhoneRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
