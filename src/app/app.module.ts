import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Dependencias
//import { PNotifySettings } from 'ng2-pnotify';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { routing } from "./app.routing";
import { QuoteService } from "./quote.service";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './routing/header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CategoriasModule } from './modules/features/categorias/categorias.module';
import { ActiveRouteDirective } from './-directives/active-route.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    MenuLateralComponent,
    ActiveRouteDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CategoriasModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [QuoteService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
