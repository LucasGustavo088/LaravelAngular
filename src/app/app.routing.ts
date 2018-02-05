import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuotesComponent } from "./quotes/quotes.component";
import { NewQuoteComponent } from "./new-quote/new-quote.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "./auth.guard";

const APP_ROUTES: Routes = [
  { path: '', component: QuotesComponent, canActivate: [AuthGuard] },
  { path: 'new-quote', component: NewQuoteComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
