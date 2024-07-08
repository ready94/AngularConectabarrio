import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

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
  },
  {
    path: 'complaints',
    data: { title: 'Denuncias' },
    loadChildren: () =>
      import('@complaints/complaints.module').then((m) => m.ComplaintsModule),
  },
  {
    path: 'calendar',
    data: { title: 'Calendario' },
    loadChildren: () =>
      import('@calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'alerts',
    data: { title: 'Alertas' },
    loadChildren: () =>
      import('@alerts/alerts.module').then((m) => m.AlertsModule),
  },
  {
    path: 'advertisements',
    data: { title: 'Avisos' },
    loadChildren: () =>
      import('@advertisements/advertisements.module').then(
        (m) => m.AdvertisementsModule
      ),
  },
  {
    path: 'activities',
    data: { title: 'Actividades' },
    loadChildren: () =>
      import('@activities/activities.module').then((m) => m.ActivitiesModule),
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
