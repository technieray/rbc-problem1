import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculaterTabComponent } from './mortgage-calculater-tab.component';

describe('MortgageCalculaterTabComponent', () => {
  let component: MortgageCalculaterTabComponent;
  let fixture: ComponentFixture<MortgageCalculaterTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCalculaterTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculaterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
