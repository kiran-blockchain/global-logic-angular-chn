import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { APP_URLS } from '../helpers/constants';
@Injectable({
  providedIn: "root"
})
export class DataService {
  countryList = [];
  userDetails ={};
  selectedCountry="";
  constructor(private http:HttpClient) {
    this.getCountries();
  }

  getCountries(){
    return this.http.get(APP_URLS.GET_COUNTRIES).toPromise();
  }
}
