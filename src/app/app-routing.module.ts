import { NgModule } from "@angular/core";
import{Routes,RouterModule} from '@angular/router';
import { UploadClientsComponent } from "./clients/upload-clients-component/upload-clients-component.component";
import { PendingApprovalComponent } from "./clients/pending-approval-component/pending-approval-component.component";
import { ManageClientComponent } from "./clients/manage-client-component/manage-client-component.component";
import{AccountHandlerComponent} from "./clients/account-handler/account-handler.component";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
const  appRoute:Routes = [
{path:'', redirectTo:'/AppComponent',pathMatch:'full'},
{path:'Dashboard',component:DashboardComponent},
{path:'ManageClients',component:ManageClientComponent},
{path:'AccountHandler',component:AccountHandlerComponent},
{path:'PendingApproval',component:PendingApprovalComponent},
{path:'UploadClients',component:UploadClientsComponent},
];  
@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule
{   

}