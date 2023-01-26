import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsProfileComponent } from './specs-profile.component';

describe('SpecsProfileComponent', () => {
  let component: SpecsProfileComponent;
  let fixture: ComponentFixture<SpecsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecsProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
