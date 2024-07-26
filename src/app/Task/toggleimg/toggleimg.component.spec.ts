import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleimgComponent } from './toggleimg.component';

describe('ToggleimgComponent', () => {
  let component: ToggleimgComponent;
  let fixture: ComponentFixture<ToggleimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleimgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
