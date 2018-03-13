import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMediaCeComponent } from './recent-media-ce.component';

describe('RecentMediaCeComponent', () => {
  let component: RecentMediaCeComponent;
  let fixture: ComponentFixture<RecentMediaCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentMediaCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMediaCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
