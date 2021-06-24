import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraProductosComponent } from './compra-productos.component';

describe('CompraProductosComponent', () => {
  let component: CompraProductosComponent;
  let fixture: ComponentFixture<CompraProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
