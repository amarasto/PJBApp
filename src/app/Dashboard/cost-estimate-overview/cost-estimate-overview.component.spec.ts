import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEstimateOverviewComponent } from './cost-estimate-overview.component';

describe('CostEstimateOverviewComponent', () => {
  let component: CostEstimateOverviewComponent;
  let fixture: ComponentFixture<CostEstimateOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostEstimateOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostEstimateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
