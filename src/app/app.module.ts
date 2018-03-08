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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    LoginComponentComponent,
    ManageClientComponent,
    AccountHandlerComponent,
    PendingApprovalComponent,
    UploadClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
