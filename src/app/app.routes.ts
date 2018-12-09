import { ExtraOptions, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

export const config: ExtraOptions = {
  useHash: true,
};
