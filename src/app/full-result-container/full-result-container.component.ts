import { Component, Input } from '@angular/core';
import { Result } from '../models/result';

@Component({
  selector: 'app-full-result-container',
  templateUrl: './full-result-container.component.html',
  styleUrls: ['./full-result-container.component.css']
})
export class FullResultContainerComponent {

  @Input() resultItem: Result;

  constructor() {
    // this.resultItem = {
    //   applicant: {
    //     surname: "Surname",
    //     first_name: "Name",
    //     second_name: "Second name",
    //     email: "example@example.com",
    //     token: "",
    //     status: "",
    //     // created: Date.now(),
    //     // expired: Date.now(),
    //     comment: ""
    //   },
    //   solved_date: Date.now(),
    //   solved_models: [{
    //     url: "../assets/models/good_template_1.svg",
    //     comment: "",
    //     mark: true,
    //     answer: true,
    //     name: "Good template #1"
    //   },{
    //     url: "../../assets/models/Colorful-5.jpg",
    //     comment: "",
    //     mark: true,
    //     answer: false,
    //     name: "Bad template #2"
    //   },{
    //     url: "../../assets/models/bad_template_3.svg",
    //     comment: "",
    //     mark: false,
    //     answer: false,
    //     name: "Bad template #3"
    //   }]
      
    //   // answers: 2,
    //   // maxCountAnswers: 5,
    //   // results: []
    // }
  }
}
