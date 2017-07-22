import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes = [
    {path: '', component: FormComponent},
    {path: 'thanks', component: ThanksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
