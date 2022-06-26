import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { CoresModule } from './cores/cores.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './cores/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'sys',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CoresModule,
    // SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
