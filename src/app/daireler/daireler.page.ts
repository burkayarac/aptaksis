import { Component, OnInit } from '@angular/core';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daireler',
  templateUrl: './daireler.page.html',
  styleUrls: ['./daireler.page.scss'],
})
export class DairelerPage implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute,  public dataService:DataIslemleriService) {
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
   }
   
  id:any;

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.DaireListe();
    }, 1000);
  }
   
 
  ngOnInit() { 
  }
 
  ionViewWillEnter(){
    this.DaireListe();
  } 

  apartmanBaslik =  "";
  liste = [];
  DaireListe(){ 
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
    this.dataService.PostData("list-flat.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.liste = result.data;
        parent.apartmanBaslik = parent.liste[0].apartmanBaslik;
        
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
