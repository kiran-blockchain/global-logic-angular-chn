import { Component, OnInit } from "@angular/core";
import { DataService } from "../providers/data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userDetails = {
    //country:this.dataSvc.selectedCountry
  };
  tested=this.dataSvc.selectedCountry;
  private countryList: Array<any>;
  constructor(private dataSvc: DataService) {
    this.countryList = this.dataSvc.countryList;
    this.userDetails = this.dataSvc.userDetails;
  }
  selectCountry(){
    //this.dataSvc.userDetails = this.userDetails;
   // this.dataSvc.selectedCountry=this.userDetails.country;
    //this.tested=this.dataSvc.selectedCountry;
  }

  ngOnInit() {
    this.dataSvc.getCountries()
    .then((result:any) =>{
      console.log(result);
      this.countryList = result;
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
