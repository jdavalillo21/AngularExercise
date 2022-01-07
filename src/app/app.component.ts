import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  //Variables
  str = "Este es un texto de prueba";
  arr = [];
  res = "";
  texto = "";

  constructor() {
    this.texto = this.textToCapitalize();
  }

  textToCapitalize() {
    this.arr = this.str.split(" ");
    for (let i = 0; i < this.arr.length; i++) {
      this.res =
        this.res +
        (this.arr[i].substr(0, 1).toUpperCase() + this.arr[i].substr(1)) +
        " ";
    }
    return this.res;
  }
}
