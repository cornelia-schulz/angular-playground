import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { ReviewComponent } from './review/review.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './items/item/item.component';

const routes: Routes = [
    {path: '', component: HomeComponent, data: { animation: 'home' }},
    {path: 'items', component: ItemsComponent, data: { animation: 'items' }},
    {path: 'item/:id', component: ItemComponent, data: { animation: 'items' }},
    {path: 'widgets', component: WidgetComponent, data: { animation: 'widgets' }},
    {path: 'review', component: ReviewComponent, data: { animation: 'review' }},
    // ** stands for any route, you can direct them wherever you like
    {path: '**', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {}
