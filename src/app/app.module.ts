import { CourcesComponents} from './cources.components';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsService} from './patients/patients.service';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponents,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PatientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
