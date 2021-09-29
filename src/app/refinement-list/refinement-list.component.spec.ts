/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RefinementListComponent } from './refinement-list.component';

describe('RefinementListComponent', () => {
  let component: RefinementListComponent;
  let fixture: ComponentFixture<RefinementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
