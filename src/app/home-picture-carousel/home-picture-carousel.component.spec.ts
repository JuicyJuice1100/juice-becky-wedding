import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePictureCarouselComponent } from './home-picture-carousel.component';

describe('HomePictureCarouselComponent', () => {
  let component: HomePictureCarouselComponent;
  let fixture: ComponentFixture<HomePictureCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePictureCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePictureCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
