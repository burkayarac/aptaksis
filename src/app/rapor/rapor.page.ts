import { Component, OnInit } from '@angular/core';
import { DataIslemleriService } from '../app-services/data-islemleri.service';

@Component({
  selector: 'app-rapor',
  templateUrl: './rapor.page.html',
  styleUrls: ['./rapor.page.scss'],
})
export class RaporPage {

  constructor( private dataService:DataIslemleriService) {}
   

  ngOnInit() {
  }
  ionViewWillEnter() { 
    this.Rapor();
  } 

  data = {};
  Rapor(){ 
    var parent = this;
    var params =  {
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    },
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-reports.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.data = result.data;
      }
      else if(result.status == "warning"){
        alert(result.message);
      }
      else if(result.status == "error"){
        alert("Sunucu Hatası");
        console.log(result.message);
      }
      
    });
  }


 
}
