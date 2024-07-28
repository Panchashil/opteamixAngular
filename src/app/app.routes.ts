import { Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { AngularpipsComponent } from './components/angularpips/angularpips.component';
import { ParentComponent } from './components/parent/parent.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { AngformComponent } from './angularForm/angform/angform.component';
import { UtdfComponent } from './angularForm/utdf/utdf.component';
import { RtfComponent } from './angularForm/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { LoginComponent } from './layout/login/login.component';
import { ServiceDataComponent } from './components/service-data/service-data.component';
import { ProdustDashComponent } from './CRUD/produst-dash/produst-dash.component';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"maindashboard",component:MaindashboardComponent,children:[
          // 2.default routing 
    // {path:"",component:DirectiveComponent},
    { path: "", redirectTo: "directive", pathMatch: "full" },
    // 1.naming routing 
    { path: "directive", component: DirectiveComponent },
    // 3.redirect routing 
    // {path:"pipes",redirectTo:"mypip",pathMatch:"full"},
    { path: "mypipe", component: AngularpipsComponent },
    {path:"servicedata",component:ServiceDataComponent},
    {path:"productdash",component:ProdustDashComponent},
    {path:"productadd",component:ProductAddComponent},
    {path:"productedit/:id",component:ProductEditComponent},
    // 4.parameterize routing 
    { path: "parent/:id", component: ParentComponent },
  
    { path: "parent", component: ParentComponent },
      //5. child routing 
    {path:"angform",component:AngformComponent,children:[
        {path:"",component:UtdfComponent},
        {path:"utdf",component:UtdfComponent},
        {path:"rtf",component:RtfComponent}
    ]},
    ]},
    
    // 6.wild-card routing 
    {path:"**",component:PagenotfoundComponent}

];
