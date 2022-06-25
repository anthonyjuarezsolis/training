import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "tul-example-one",
  templateUrl: "./example-one.component.html",
  styleUrls: ["./example-one.component.scss"],
})
export class ExampleOneComponent implements OnInit {
  @Input() name: string | undefined = "anthony";
  @Output() public exampleOutput = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onOutput(event: boolean) {
    console.log(event);
    this.exampleOutput.emit(event);
  }
}
