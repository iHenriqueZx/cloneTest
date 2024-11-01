import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { StoreComponent } from './store/store.component';
import { StaffComponent } from './staff/staff.component';
import { PasswordComponent } from './password/password.component';

export const routes: Routes = [
    {
        path: "",
        component: InicioComponent
    },
    {
        path: "loja",
        component: StoreComponent
    },
    {
        path: "staff",
        component: StaffComponent
    },
    {
        path: "esqueci-minha-senha",
        component: PasswordComponent
    },
];
