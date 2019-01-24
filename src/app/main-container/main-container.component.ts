import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subscriber } from 'rxjs';
// import {AppComponent} from '../app.component';
import { Model } from '../models/model';
import { SolvedModel } from '../models/solved-model';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  currentModel: Array<Model> = [{
    _id: "",
    url: "../../assets/empty-img.png",
    answer: false,
    name: "Nothing found"
  }];
  currentSolvedModel: Array<SolvedModel> = [{
    model: {
      _id: "",
      url: "../../assets/empty-img.png",
      answer: false,
      name: "Nothing found"
    },
    mark: false,
    comment: ""
  }];
  currentSelectedCount: number = 0;

  ngOnInit() {
    // this.http.get(
    //   'http://localhost:8000/model/all',
    //   ).subscribe((data:Array<Model>) => {
    //     this.currentModel = data;
    //     data.forEach(e => {
    //       e.url = "../../assets" + e.url;
    //       this.currentSolvedModel.push({model: e, mark: false, comment: ""});
    //     });

    //     console.log(this.currentSolvedModel);
    //     // this.currentModel = data;
    //     // this.currentSelectModel = (SolvedModel)this.currentModel;
    //     // console.log(data);
    //     // this.currentModel.forEach(e => {
    //     //   e.url = "../../assets" + e.url
    //     // });
    //     this.currentSelectModel = this.currentSolvedModel[0];
    //   })

    this.http.get(
      'http://localhost:8000/model/all',
      ).subscribe((data:Array<Model>) => {
        this.currentModel = data;
        console.log(data);
        this.currentModel.forEach(e => {
          e.url = "../../assets" + e.url
        });
        //need to check
        this.currentSelectModel = this.currentModel[0];
      });

    this.currentModel.forEach(e => {
      this.currentSolvedModel.push({model: e, mark: false, comment: ""});
    });
    
    //take user date from local storage if exist
    if (localStorage.getItem('savedTestResults')) {
      this.currentModel = JSON.parse( localStorage.getItem('savedTestResults') );
    }
    //setting first element of test after defining existing localStorageDate
    this.currentSelectModel = this.currentSolvedModel[0];

  }

  currentSelectModel: Object;

  // currentSelectModel = this.currentSolvedModel[0];
  // currentSelectModel = this.currentModel[0];

  //saving data to the local storage (used in checkbox's and saveComment functions)
  saveUserTestResult() {
    console.log('IMAGE CHOOSEN', this.currentModel);
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));
  }

  testComponentSend() {
    console.log("Sending...");
    this.currentModelLog();
    const sendData = this.currentSolvedModel;

    this.http.post(
      'http://localhost:8000/results/save',
      { models: sendData },
    ).subscribe(data => {
      console.log(data)
    })
  }

  testComponentSave() {
    this.saveUserTestResult();
  }

  testComponentChoose() {
    this.currentModelLog();
  }

  sideBarSelect(selectedModel) {
    this.saveUserTestResult();

    console.log(this.currentSelectedCount);

    console.log('[MainContainer]', 'sideBarSelect');
    this.currentModelLog();
    this.currentSelectModel = selectedModel;
    // console.log(this.currentModel.filter(e => e.mark).length);
    // setTimeout(() => this.currentSelectedCount = this.currentModel.filter(e => e.mark).length, 0);
  }

  currentModelLog() {
    console.log(this.currentModel);
  }

}
