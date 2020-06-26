import { Component, OnInit } from '@angular/core';
import { DataIslemleriService } from '../app-services/data-islemleri.service';

@Component({
  selector: 'app-aidatlar',
  templateUrl: './aidatlar.page.html',
  styleUrls: ['./aidatlar.page.scss'],
})
export class AidatlarPage implements OnInit {

  constructor(private dataService:DataIslemleriService) { }


  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ApartmanListe();
    }, 1000);
  }
  

  ngOnInit() {
  }
 
  ionViewWillEnter() {
    this.ApartmanListe();
  } 
  liste = [];
  ApartmanListe(){ 
    var parent = this;
    console.log(parent.dataService.uyeBilgisi);
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      } 
    }
    console.log(params);
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-apartment-dues.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.liste = result.data;
        
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
