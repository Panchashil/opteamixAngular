import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdustDashComponent } from './produst-dash.component';

describe('ProdustDashComponent', () => {
  let component: ProdustDashComponent;
  let fixture: ComponentFixture<ProdustDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdustDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdustDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
