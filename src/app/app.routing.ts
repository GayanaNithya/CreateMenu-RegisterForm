import { Routes, RouterModule } from '@angular/router';
import { DummyLoginComponent } from './dummy-login/dummy-login.component';
import { RegistercomponentComponent } from './registercomponent';


const routes: Routes = [
    { path: 'register', component: RegistercomponentComponent },

    // otherwise redirect to home
    { path: 'login', component: DummyLoginComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);