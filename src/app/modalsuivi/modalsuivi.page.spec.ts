import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsuiviPage } from './modalsuivi.page';

describe('ModalsuiviPage', () => {
  let component: ModalsuiviPage;
  let fixture: ComponentFixture<ModalsuiviPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsuiviPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsuiviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
