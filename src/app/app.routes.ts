import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostdetailComponent } from './home/postdetail/postdetail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'post', component: PostdetailComponent }
];
