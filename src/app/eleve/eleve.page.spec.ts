import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevePage } from './eleve.page';

describe('ElevePage', () => {
  let component: ElevePage;
  let fixture: ComponentFixture<ElevePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
