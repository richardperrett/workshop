import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepiecesComponent } from './timepieces.component';

describe('TimepiecesComponent', () => {
  let component: TimepiecesComponent;
  let fixture: ComponentFixture<TimepiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
