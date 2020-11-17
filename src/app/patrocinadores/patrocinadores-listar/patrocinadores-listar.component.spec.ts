/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatrocinadoresListarComponent } from './patrocinadores-listar.component';

describe('PatrocinadoresListarComponent', () => {
  let component: PatrocinadoresListarComponent;
  let fixture: ComponentFixture<PatrocinadoresListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadoresListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadoresListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
