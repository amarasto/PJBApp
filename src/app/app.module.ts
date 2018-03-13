import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ManageClientComponent } from './clients/manage-client-component/manage-client-component.component';
import { AccountHandlerComponent } from './clients/account-handler/account-handler.component';
import { PendingApprovalComponent } from './clients/pending-approval-component/pending-approval-component.component';
import { UploadClientsComponent } from './clients/upload-clients-component/upload-clients-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientBrandOverviewComponent } from './Dashboard/client-brand-overview/client-brand-overview.component';
import { CostEstimateOverviewComponent } from './Dashboard/cost-estimate-overview/cost-estimate-overview.component';
import { BillingOverviewComponent } from './Dashboard/billing-overview/billing-overview.component';
import { RecentMediaCeComponent } from './Dashboard/recent-media-ce/recent-media-ce.component';
import { RecentProdCeComponent } from './Dashboard/recent-prod-ce/recent-prod-ce.component';
import { ProdTrackingReportOverviewComponent } from './Dashboard/prod-tracking-report-overview/prod-tracking-report-overview.component';
import { MediaTrackingReportOverviewComponent } from './Dashboard/media-tracking-report-overview/media-tracking-report-overview.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    LoginComponentComponent,
    ManageClientComponent,
    AccountHandlerComponent,
    PendingApprovalComponent,
    UploadClientsComponent,
    ClientBrandOverviewComponent,
    CostEstimateOverviewComponent,
    BillingOverviewComponent,
    RecentMediaCeComponent,
    RecentProdCeComponent,
    ProdTrackingReportOverviewComponent,
    MediaTrackingReportOverviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
