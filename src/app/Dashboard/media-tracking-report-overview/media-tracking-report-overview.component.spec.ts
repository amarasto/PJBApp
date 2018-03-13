import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTrackingReportOverviewComponent } from './media-tracking-report-overview.component';

describe('MediaTrackingReportOverviewComponent', () => {
  let component: MediaTrackingReportOverviewComponent;
  let fixture: ComponentFixture<MediaTrackingReportOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTrackingReportOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTrackingReportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
