import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViewHomeComponent } from './principal-view-home.component';

describe('PrincipalViewHomeComponent', () => {
  let component: PrincipalViewHomeComponent;
  let fixture: ComponentFixture<PrincipalViewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViewHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
