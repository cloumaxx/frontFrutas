import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListFrutaComponent } from './Components/list-fruta/list-fruta.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { 
                path: '',
                component: ListFrutaComponent
             }, 

           
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
