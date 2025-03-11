import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expo4Component } from './expo4.component';

describe('Expo4Component', () => {
  let component: Expo4Component;
  let fixture: ComponentFixture<Expo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Expo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
