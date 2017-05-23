import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrivilligDetaljerComponent } from './frivillig-detaljer.component';

describe('FrivilligDetaljerComponent', () => {
  let component: FrivilligDetaljerComponent;
  let fixture: ComponentFixture<FrivilligDetaljerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrivilligDetaljerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrivilligDetaljerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
