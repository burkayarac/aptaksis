import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataIslemleriService } from '../app-services/data-islemleri.service';

@Component({
  selector: 'app-harcamakayitlari',
  templateUrl: './harcamakayitlari.page.html',
  styleUrls: ['./harcamakayitlari.page.scss'],
})
export class HarcamakayitlariPage implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute,  public dataService:DataIslemleriService) {
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
   }
   
  id:any;
  tab  = "odemeBekleyenler";

 
  ngOnInit() { 
  }
 
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.Liste();
    }, 1000);
  }
  
  ionViewWillEnter(){
    this.ApartmanAdiGetir();
    this.Liste(); 
  } 

  apartmanBaslik =  "";
  liste = [];
  Liste(){ 
    var parent = this; 
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      },
      apartmanID:parent.id,
    } 
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-expenses.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.liste = result.data; 
        
      }
      else if(result.status == "warning"){
        //alert(result.message);
      }
      else if(result.status == "error"){
        alert("Sunucu Hatası");
        console.log(result.message);
      }
      
    });
  }

  
  ApartmanAdiGetir(){ 
    var parent = this; 
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      },
      apartmanID:parent.id
    } 
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("detail-apartment.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.apartmanBaslik = result.data.apartmanBaslik;
        
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
