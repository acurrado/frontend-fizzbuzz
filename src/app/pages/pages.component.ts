import { Component, OnInit } from "@angular/core";
import { FizzbuzzService } from "../services/fizzbuzz.service";
import { Operation } from "../models/operation.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styles: [],
})
export class PagesComponent implements OnInit {
  public fizzBuzzForm: FormGroup;
  public errorMessage: string;
  public showErrorMessage: boolean;
  private operations: Operation[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private fizzbuzzService: FizzbuzzService
  ) {
    this.fizzBuzzForm = this.formBuilder.group({
      min: ["", [Validators.required, Validators.min(-50), Validators.max(50)]],
      max: ["", [Validators.required, Validators.min(-50), Validators.max(50)]],
    });
  }

  ngOnInit(): void {}

  get operationResults() {
    return this.operations;
  }

  get minValue() {
    return this.fizzBuzzForm.get("min");
  }

  get maxValue() {
    return this.fizzBuzzForm.get("max");
  }

  callFizzBuzz() {

    this.fizzbuzzService
      .getFizzBuzz(this.minValue.value, this.maxValue.value)
      .subscribe(
        (resp) => {
          this.showErrorMessage = false;
          this.operations.push(resp);
        },
        (error) => {
          this.errorMessage = "Ocurrió un error inesperado";

          if (error.error.message) {
            this.errorMessage = error.error.message;
          }

          this.showErrorMessage = true;
        }
      );
  }
}
