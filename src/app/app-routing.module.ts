import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/design',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/user',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'model/:typeId/:typeName',
    loadChildren: () => import('./pages/model/model.module').then(m => m.ModelPageModule)
  },
  {
    path: 'factory/:typeId/:index/:modelName',
    loadChildren: () => import('./pages/factory/factory.module').then(m => m.FactoryPageModule)
  },
  {
    path: 'tabs/draft',
    loadChildren: () => import('./pages/draft/draft.module').then( m => m.DraftPageModule)
  },
  {
    path: 'detail/:modelId',
    loadChildren: () => import('./pages/model-detail/model-detail.module').then( m => m.ModelDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
