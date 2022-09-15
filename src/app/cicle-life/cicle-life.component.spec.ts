import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleLifeComponent } from './cicle-life.component';

describe('CicleLifeComponent', () => {
  let component: CicleLifeComponent;
  let fixture: ComponentFixture<CicleLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicleLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicleLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
