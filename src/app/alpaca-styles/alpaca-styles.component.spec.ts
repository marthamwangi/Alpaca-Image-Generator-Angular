import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaStylesComponent } from './alpaca-styles.component';

describe('AlpacaStylesComponent', () => {
  let component: AlpacaStylesComponent;
  let fixture: ComponentFixture<AlpacaStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpacaStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlpacaStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
