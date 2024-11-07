import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenualumnoPage } from './menualumno.page';

describe('MenualumnoPage', () => {
  let component: MenualumnoPage;
  let fixture: ComponentFixture<MenualumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenualumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
