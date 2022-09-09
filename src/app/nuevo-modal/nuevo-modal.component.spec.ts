import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoModalComponent } from './nuevo-modal.component';

describe('NuevoModalComponent', () => {
  let component: NuevoModalComponent;
  let fixture: ComponentFixture<NuevoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
