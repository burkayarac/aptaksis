import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataIslemleriService } from '../app-services/data-islemleri.service';

@Component({
  selector: 'app-aidatkayitlari',
  templateUrl: './aidatkayitlari.page.html',
  styleUrls: ['./aidatkayitlari.page.scss'],
})
export class AidatkayitlariPage implements OnInit {
  constructor(private router:Router, private activatedRoute:ActivatedRoute,  public dataService:DataIslemleriService) {
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
   }
   
  id:any;
  tab  = "odemeBekleyenler";

 
  ngOnInit() { 
  }
 
  ionViewWillEnter(){
    this.ApartmanAdiGetir();
    this.OdemeBekleyenListe();
  } 

  apartmanBaslik =  "";
  odemeBekleyenListe = [];
  OdemeBekleyenListe(){ 
    var parent = this; 
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      },
      apartmanID:parent.id,
      type:0
    } 
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-dues.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.odemeBekleyenListe = result.data; 
        
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


  aidatListe = [];
  AidatListe(){ 
    var parent = this; 
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      },
      apartmanID:parent.id,
      type:1
    } 
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-dues.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.aidatListe = result.data; 
        
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
