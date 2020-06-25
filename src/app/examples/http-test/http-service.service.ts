import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  public getNames() : Observable<string[]> {
    return this.http.get('assets/names.json').pipe(
      map((x: string[]) => {
        console.log(x.length);
        return x;
      })
    );
  }
}
