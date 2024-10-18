import { NgModule } from '@angular/core';
import {  CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListFrutaComponent } from './Components/list-fruta/list-fruta.component';

import { TableModule } from 'primeng/table';
import { FrutaService } from './services/frutaServices/fruta-services.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CreateFrutaComponent } from "./Components/create-fruta/create-fruta.component";
import { InputNumberModule } from 'primeng/inputnumber';
import { UpdateFrutaComponent } from './Components/update-fruta/update-fruta.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ListFrutaComponent,
    CreateFrutaComponent,
    UpdateFrutaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputNumberModule,
    ToastModule
],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    FrutaService,
    MessageService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }