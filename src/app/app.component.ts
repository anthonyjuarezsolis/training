import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  myForm: FormGroup;
  messageValid: string;
  formLocalStorage: any;

  constructor(private fb: FormBuilder) {
    this.formLocalStorage = localStorage.getItem("form");

    console.log("🟢 formLocalStorage", this.formLocalStorage);
  }

  ngOnInit() {
    this.messageValid = "";
    this.myForm = this.fb.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.value.user === "test01" && form.value.password === "test01") {
      this.messageValid = "La contraseña es correcta, se procede a guardar";
      localStorage.setItem("form", JSON.stringify(form?.value));
    } else {
      this.messageValid = "La contraseña es incorrecta";
    }
  }
}
