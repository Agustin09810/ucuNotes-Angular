import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupNavBarComponent } from './sup-nav-bar/sup-nav-bar.component';
import { InfNavBarComponent } from './inf-nav-bar/inf-nav-bar.component';
import { CardsComponent } from './cards/cards.component';
import { NightModeSwitchComponent } from './night-mode-switch/night-mode-switch.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SupNavBarComponent,
    InfNavBarComponent,
    CardsComponent,
    NightModeSwitchComponent,
    DeleteButtonComponent,
    AddButtonComponent,
    AddEditModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DeleteModalComponent, AddEditModalComponent ]
})
export class AppModule { }
