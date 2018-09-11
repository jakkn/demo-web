import { Component, OnInit, Input } from "@angular/core";
import { PensionService, Pension } from "../../services/pension.service";

@Component({
  selector: "app-my-pension",
  templateUrl: "./my-pension.component.html",
  styleUrls: ["./my-pension.component.css"]
})
export class MyPensionComponent implements OnInit {
  @Input()
  pension: Pension;

  constructor() {}

  ngOnInit() {}
}
