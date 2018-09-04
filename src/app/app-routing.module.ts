import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { WidgetComponent } from './widget/widget.component'
import { ReviewComponent } from './review/review.component'

const routes: Routes = [
    {path: 'widgets', component: WidgetComponent},
    // ** stands for any route, you can direct them wherever you like
    {path: '**', component: WidgetComponent},
    {path: 'review', component: ReviewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {}