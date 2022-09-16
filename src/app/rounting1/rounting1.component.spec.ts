import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rounting1Component } from './rounting1.component';

describe('Rounting1Component', () => {
  let component: Rounting1Component;
  let fixture: ComponentFixture<Rounting1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rounting1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rounting1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
