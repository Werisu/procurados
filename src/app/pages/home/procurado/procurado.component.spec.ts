import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuradoComponent } from './procurado.component';

describe('ProcuradoComponent', () => {
  let component: ProcuradoComponent;
  let fixture: ComponentFixture<ProcuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcuradoComponent]
    });
    fixture = TestBed.createComponent(ProcuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
