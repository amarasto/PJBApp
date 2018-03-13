import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTrackingReportOverviewComponent } from './prod-tracking-report-overview.component';

describe('ProdTrackingReportOverviewComponent', () => {
  let component: ProdTrackingReportOverviewComponent;
  let fixture: ComponentFixture<ProdTrackingReportOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdTrackingReportOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTrackingReportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
