import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBrandOverviewComponent } from './client-brand-overview.component';

describe('ClientBrandOverviewComponent', () => {
  let component: ClientBrandOverviewComponent;
  let fixture: ComponentFixture<ClientBrandOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBrandOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBrandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
