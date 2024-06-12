import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LendingPageComponent } from './pages/lending-page/lending-page.component';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareerComponent } from './components/career/career.component';
import { OurStoreComponent } from './components/our-store/our-store.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OnlyNumber } from 'src/app/directives/only-number.directive';


@NgModule({
  declarations: [
    LendingPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    AboutUsComponent,
    CareerComponent,
    OurStoreComponent,
    ContactUsComponent
  ]
})
export class HomeModule { }
