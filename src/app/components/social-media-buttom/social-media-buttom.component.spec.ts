import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaButtomComponent } from './social-media-buttom.component';

describe('SocialMediaButtomComponent', () => {
  let component: SocialMediaButtomComponent;
  let fixture: ComponentFixture<SocialMediaButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
