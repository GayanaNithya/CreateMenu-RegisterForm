import { Routes, RouterModule } from '@angular/router';
import { CartlistComponent } from './cartlist/cartlist.component';
import { DummyLoginComponent } from './dummy-login/dummy-login.component';
import { RegistercomponentComponent } from './registercomponent';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
    { path: 'register', component: RegistercomponentComponent },
    { path: 'wish_list', component: WishlistComponent },
    { path: 'shopping_cart', component: CartlistComponent },    
    { path: 'login', component: DummyLoginComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);