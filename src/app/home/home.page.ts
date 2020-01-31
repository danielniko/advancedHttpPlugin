import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  baseUrl: string = 'https://crudbudget.herokuapp.com/api/';
  categories: any;

  constructor(private http: HTTP, private httpClient: HttpClient) {}

  ionViewWillEnter() {

    this.http.setServerTrustMode('pinned').then(() => {
    }, function(err) {

    });



    let requestUrl = this.baseUrl + "categories";
    let requestData = {};
    let headers = {}
    if (window.cordova) {
      // if run in device use advanced-http
      this.http.get(requestUrl, requestData, headers).then(
        response => {
          console.log(response.data);
        },
        error => {
        }
      )
    } else {
      // if run in browser use normal http
      this.httpClient.get(requestUrl, headers).subscribe(
        (data: any) => {
        if (data) {
          this.categories = data._embedded.categories;
          console.log(this.categories);
        }
      })
    }
  }

  doInquiry() {
    
  }

}
