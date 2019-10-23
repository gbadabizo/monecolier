import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivisPage } from './suivis.page';

describe('SuivisPage', () => {
  let component: SuivisPage;
  let fixture: ComponentFixture<SuivisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
