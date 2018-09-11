import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of as observableOf, BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Payout {
  age: number;
  value: number;
}

export class Pension {
  person: Person;
  pensionPayoutTable: Payout[];

  constructor(person: Person, payoutTable: Payout[]) {
    this.person = person;
    this.pensionPayoutTable = payoutTable;
  }
}

@Injectable({
  providedIn: "root"
})
export class PensionService {
  private _pension$: BehaviorSubject<Pension>;
  constructor(private http: HttpClient) {
    const nobody: Person = {
      firstName: "Mr.",
      lastName: "Nobody"
    };
    this._pension$ = new BehaviorSubject(new Pension(nobody, []));
  }

  public fetchPension() {
    //return this.http.get("someUrl").pipe().map(data => new PensionData(data));
    const dummyPensionTable: Pension = {
      person: {
        firstName: "Jakob",
        lastName: "Knutsen"
      },
      pensionPayoutTable: [
        { age: 67, value: 1000000 },
        { age: 68, value: 2000000 },
        { age: 69, value: 3000000 },
        { age: 70, value: 4000000 },
        { age: 71, value: 5000000 },
        { age: 72, value: 6000000 },
        { age: 73, value: 7000000 },
        { age: 74, value: 8000000 },
        { age: 75, value: 9000000 }
      ]
    };

    return observableOf(dummyPensionTable)
      .pipe(tap(data => this._pension$.next(data)))
      .subscribe();
  }

  public get pension$(): Observable<Pension> {
    return this._pension$.asObservable();
  }
}
