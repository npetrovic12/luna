import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSposaTemplateComponent } from './la-sposa-template.component';

describe('LaSposaTemplateComponent', () => {
  let component: LaSposaTemplateComponent;
  let fixture: ComponentFixture<LaSposaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaSposaTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSposaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
