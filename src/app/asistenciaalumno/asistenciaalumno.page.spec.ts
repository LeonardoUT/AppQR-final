import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaalumnoPage } from './asistenciaalumno.page';

describe('AsistenciaalumnoPage', () => {
  let component: AsistenciaalumnoPage;
  let fixture: ComponentFixture<AsistenciaalumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
