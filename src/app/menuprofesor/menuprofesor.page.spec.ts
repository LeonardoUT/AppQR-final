import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprofesorPage } from './menuprofesor.page';

describe('MenuprofesorPage', () => {
  let component: MenuprofesorPage;
  let fixture: ComponentFixture<MenuprofesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
