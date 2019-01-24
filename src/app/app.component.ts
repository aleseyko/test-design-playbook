import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {

}
currentModel:any;
headers;
customersObservable;
currentSelectModel:number;

ngOnInit() {
  this.headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxlc2V5a29AZ21haWwuY29tIiwiYWNjZXNzIjoidXNlciIsImlhdCI6MTU0ODIzNjgzNSwiZXhwIjoxNTQ4MzIzMjM1fQ.2dGDRptmOUO-LLcI_9TR8Nt9cV9Cl2No92dhZ3ZQfwo');
  console.log(this.headers)
  this.customersObservable = this.http.get('http://localhost:8000/model/all', {headers:this.headers}).subscribe(data => {
    this.currentModel = data
    console.log(data)
    this.currentModel.forEach(e => {
      e.url = "../../assets" + e.url
    });
    this.currentSelectModel = this.currentModel[0]
  })
  console.log(this.customersObservable)

  // this.http.get('http://localhost:8000/model/all')
}

}
