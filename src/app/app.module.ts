import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NameComponent } from "./components/name/name.component";
import { MyPensionComponent } from "./components/my-pension/my-pension.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NameComponent, MyPensionComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
