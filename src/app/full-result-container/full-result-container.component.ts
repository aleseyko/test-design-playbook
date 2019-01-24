import { Component, Input } from '@angular/core';
import { Result } from '../models/result';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'app-full-result-container',
  templateUrl: './full-result-container.component.html',
  styleUrls: ['./full-result-container.component.css']
})
export class FullResultContainerComponent {

  @Input() resultItem: Result

  constructor() {
    this.resultItem = {
      solved_models: [{
        model: {
          _id: "some_id-1",
          url: "../assets/models/good_template_1.svg",
          answer: false,
          name: "Bad model"
        },
        mark: true,
        comment: ""
      }],
      applicant : {
        surname: "Surname",
        first_name: "Name",
        second_name: "Second name",
        email: "example@example.com",
        token: "random_key",
        status: Applicant.STATUS_EVALUATED,
        created: new Date(),
        comment: "",
        expired: new Date()
      },
      solved_date: new Date()
    }
  }
}
