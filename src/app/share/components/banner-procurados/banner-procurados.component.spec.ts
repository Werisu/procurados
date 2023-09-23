import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProcuradosComponent } from './banner-procurados.component';

describe('BannerProcuradosComponent', () => {
  let component: BannerProcuradosComponent;
  let fixture: ComponentFixture<BannerProcuradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerProcuradosComponent]
    });
    fixture = TestBed.createComponent(BannerProcuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
