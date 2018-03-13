import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProdCeComponent } from './recent-prod-ce.component';

describe('RecentProdCeComponent', () => {
  let component: RecentProdCeComponent;
  let fixture: ComponentFixture<RecentProdCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentProdCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentProdCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
