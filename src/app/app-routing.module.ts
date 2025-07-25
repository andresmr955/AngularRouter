import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CustomPreloadService } from './services/custom-preload.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
      path: '', 
      loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
      data:{
        preload: true,
      }
    },
    
    {
      path: 'cms', 
      canActivate: [AuthGuard],
      loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
      data:{
        preload: true,
      }
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
  
}
