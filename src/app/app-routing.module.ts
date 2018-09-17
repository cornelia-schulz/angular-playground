import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { ReviewComponent } from './review/review.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'widgets', component: WidgetComponent},
    {path: 'review', component: ReviewComponent},
    // ** stands for any route, you can direct them wherever you like
    {path: '**', component: HomeComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {}