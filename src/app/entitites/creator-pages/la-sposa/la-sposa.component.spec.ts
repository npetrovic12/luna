import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSposaComponent } from './la-sposa.component';

describe('LaSposaComponent', () => {
  let component: LaSposaComponent;
  let fixture: ComponentFixture<LaSposaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaSposaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSposaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
