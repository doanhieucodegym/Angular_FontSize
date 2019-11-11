import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeEditorComponent } from './font-size-editor.component';
// import{Component,OnInit} from '@angular/core';

describe('FontSizeEditorComponent', () => {
  let component: FontSizeEditorComponent;
  let fixture: ComponentFixture<FontSizeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

