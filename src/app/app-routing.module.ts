import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { authGuard } from '@shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    data: { title: 'Iniciar sesión' },
    loadChildren: () =>
      import('@login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    data: { title: 'Inicio' },
    loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    data: { title: 'Inicio' },
    loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'news',
    data: { title: 'Noticias' },
    loadChildren: () => import('@news/news.module').then((m) => m.NewsModule),
    canActivate: [authGuard]
  },
  {
    path: 'complaints',
    data: { title: 'Denuncias' },
    loadChildren: () =>
      import('@complaints/complaints.module').then((m) => m.ComplaintsModule),
    canActivate: [authGuard]
  },
  {
    path: 'calendar',
    data: { title: 'Calendario' },
    loadChildren: () =>
      import('@calendar/calendar.module').then((m) => m.CalendarModule),
    canActivate: [authGuard]
  },
  {
    path: 'alerts',
    data: { title: 'Alertas' },
    loadChildren: () =>
      import('@alerts/alerts.module').then((m) => m.AlertsModule),
    canActivate: [authGuard]
  },
  {
    path: 'advertisements',
    data: { title: 'Avisos' },
    loadChildren: () =>
      import('@advertisements/advertisements.module').then(
        (m) => m.AdvertisementsModule
      ),
      canActivate: [authGuard]
  },
  {
    path: 'activities',
    data: { title: 'Actividades' },
    loadChildren: () =>
      import('@activities/activities.module').then((m) => m.ActivitiesModule),
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    data: { title: 'Administracion' },
    loadChildren: () =>
      import('@admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard]
  },
  { path: 'notFound404', component: Error404Component },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
