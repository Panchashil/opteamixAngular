import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularpipsComponent } from './angularpips.component';

describe('AngularpipsComponent', () => {
  let component: AngularpipsComponent;
  let fixture: ComponentFixture<AngularpipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularpipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularpipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
