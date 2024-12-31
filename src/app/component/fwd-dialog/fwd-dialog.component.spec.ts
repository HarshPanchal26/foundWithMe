import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwdDialogComponent } from './fwd-dialog.component';

describe('FwdDialogComponent', () => {
  let component: FwdDialogComponent;
  let fixture: ComponentFixture<FwdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FwdDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
