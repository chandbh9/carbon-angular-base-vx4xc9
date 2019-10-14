import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from "carbon-components-angular";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {ReactiveFormsModule } from "@angular/forms";

import {AccordionModule,SelectModule, InputModule, LoadingModule, TabsModule,PlaceholderModule , DialogModule, TableModule,SearchModule,ListModule,RadioModule,PaginationModule ,FileUploaderModule, NotificationModule, DropdownModule, CheckboxModule, NumberModule, BreadcrumbModule } from "carbon-components-angular";
import { DatePickerModule } from "carbon-components-angular/datepicker/datepicker.module";
import { I18nModule } from "carbon-components-angular/i18n/i18n.module";

import { HttpClientModule } from '@angular/common/http';

import {EmpDetailsComponent} from './tab1/tab1.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ButtonModule,
    EmpDetailsComponent
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
