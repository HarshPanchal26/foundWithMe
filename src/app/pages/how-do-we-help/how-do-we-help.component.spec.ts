import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoWeHelpComponent } from './how-do-we-help.component';

describe('HowDoWeHelpComponent', () => {
  let component: HowDoWeHelpComponent;
  let fixture: ComponentFixture<HowDoWeHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowDoWeHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowDoWeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
