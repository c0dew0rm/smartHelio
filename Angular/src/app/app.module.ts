import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule ,NbSelectModule,NbCardModule , NbStepperModule ,NbDatepickerModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbDatepickerModule.forRoot(),
    NbDatepickerModule,
    ChartsModule,
    NbLayoutModule,
    NbStepperModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbCardModule,
    NgbModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
