import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Operation } from "../models/operation.model";
import { map } from "rxjs/operators";

const base_url = environment.base_url;

@Injectable({
  providedIn: "root",
})
export class FizzbuzzService {
  constructor(private http: HttpClient) {}

  getFizzBuzz(min, max) {
    const url = `${base_url}/fizzbuzz/${min}/${max}`;

    return this.http.get<Operation>(url).pipe(
      map((resp) => {
        resp.min = min;
        resp.max = max;

        return resp;
      })
    );
  }
}
