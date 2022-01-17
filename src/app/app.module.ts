// app.module.ts

import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
@NgModule({
  declarations: [AppComponent,LoginComponent, RegisterComponent],
  imports: [BrowserModule, routing,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
