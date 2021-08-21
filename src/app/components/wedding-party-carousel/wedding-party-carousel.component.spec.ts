import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartyCarouselComponent } from './wedding-party-carousel.component';

describe('WeddingPartyCarouselComponent', () => {
  let component: WeddingPartyCarouselComponent;
  let fixture: ComponentFixture<WeddingPartyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPartyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPartyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
