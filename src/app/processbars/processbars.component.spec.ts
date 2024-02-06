import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessbarsComponent } from './processbars.component';

describe('ProcessbarsComponent', () => {
  let component: ProcessbarsComponent;
  let fixture: ComponentFixture<ProcessbarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessbarsComponent]
    });
    fixture = TestBed.createComponent(ProcessbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
