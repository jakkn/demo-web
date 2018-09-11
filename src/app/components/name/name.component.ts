import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.css"]
  //, changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {
  /* Demos the effect of changeDetection OnPush */
  @Input()
  name;

  constructor() {}

  ngOnInit() {}
}
