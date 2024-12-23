import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAgencyComponent } from './why-agency.component';

describe('WhyAgencyComponent', () => {
  let component: WhyAgencyComponent;
  let fixture: ComponentFixture<WhyAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
