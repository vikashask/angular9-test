import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ComComponent } from './page1-com.component';

describe('Page1ComComponent', () => {
  let component: Page1ComComponent;
  let fixture: ComponentFixture<Page1ComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1ComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1ComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
