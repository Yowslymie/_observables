import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  public names: string[];
  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.httpService.getNames().subscribe(x => {
      console.log(x);
      this.names = x;
    });
  }

}
