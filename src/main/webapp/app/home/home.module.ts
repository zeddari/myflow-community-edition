import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyflowSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MyflowSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class MyflowHomeModule {}
