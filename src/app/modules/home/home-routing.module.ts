import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LendingPageComponent } from './pages/lending-page/lending-page.component';

const routes: Routes = [
  {
		path: '',
		pathMatch: 'full',
		component: LendingPageComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
