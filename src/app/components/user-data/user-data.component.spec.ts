import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataPage } from './user-data.page';

describe('UserDataPage', () => {
  let component: UserDataPage;
  let fixture: ComponentFixture<UserDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
