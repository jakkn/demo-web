import { Component } from "@angular/core";
import { Person, PensionService, Pension } from "./services/pension.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo-web";
  name: Person = {
    firstName: "Jakob",
    middleName: "",
    lastName: "Knutsen"
  };
  pension$: Observable<Pension>;

  constructor(private pensionService: PensionService) {
    this.pension$ = this.pensionService.pension$;
  }

  reverseName() {
    const tmp = this.name.firstName;
    this.name.firstName = this.name.lastName;
    this.name.lastName = tmp;
  }

  fetchPension() {
    this.pensionService.fetchPension();
  }
}
