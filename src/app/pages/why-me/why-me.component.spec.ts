import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMEComponent } from './why-me.component';

describe('WhyMEComponent', () => {
  let component: WhyMEComponent;
  let fixture: ComponentFixture<WhyMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
