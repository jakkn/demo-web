import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo-web";
  name = {
    firstName: "Jakob",
    lastName: "Knutsen"
  };

  reverseName() {
    const tmp = this.name.firstName;
    this.name.firstName = this.name.lastName;
    this.name.lastName = tmp;
  }
}
