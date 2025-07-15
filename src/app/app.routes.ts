import { Routes } from '@angular/router';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';
import { ElementDetailComponent } from './components/element-detail/element-detail.component';

export const routes: Routes = [
  { path: '', component: PeriodicTableComponent },
  { path: 'element/:id', component: ElementDetailComponent },
  { path: '**', redirectTo: '' }
];
