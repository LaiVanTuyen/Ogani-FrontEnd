import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/clients/index/index.component';
import { HomeComponent } from './components/clients/home/home.component';
import {ToastModule} from "primeng/toast";
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { LoginPageComponent } from './components/clients/login-page/login-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {InputNumberModule} from "primeng/inputnumber";
import {MultiSelectModule} from "primeng/multiselect";
import {DataViewModule} from "primeng/dataview";
import {SliderModule} from "primeng/slider";
import {PasswordModule} from "primeng/password";
import {TabViewModule} from "primeng/tabview";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CarouselModule} from "primeng/carousel";
import {DividerModule} from "primeng/divider";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    DashboardComponent,
    CategoryComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CardModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    TableModule,
    InputNumberModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    FileUploadModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputTextModule,
    RadioButtonModule,
    DividerModule,
    CarouselModule,
    OverlayPanelModule,
    TabViewModule,
    PasswordModule,
    SliderModule,
    DataViewModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
