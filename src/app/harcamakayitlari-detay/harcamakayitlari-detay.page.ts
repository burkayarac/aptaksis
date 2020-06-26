import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-harcamakayitlari-detay',
  templateUrl: './harcamakayitlari-detay.page.html',
  styleUrls: ['./harcamakayitlari-detay.page.scss'],
})
export class HarcamakayitlariDetayPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  id:any;
  ngOnInit() { 
    this.formControl = this.formBuilder.group({
      baslik: ['', Validators.compose([Validators.required])], 
      aciklama: ['', Validators.compose([Validators.required])], 
      tarih: ['', Validators.compose([Validators.required])], 
      tutar: ['',Validators.compose([Validators.required, Validators.min(1), Validators.max(100000)])], 
    }); 
  }


  minDate:string = new Date(((new Date()).setFullYear((new Date()).getFullYear()))).toISOString();
  maxDate:string = new Date(((new Date()).setFullYear((new Date()).getFullYear() + 10))).toISOString();

  submitted = false; 

  data = {harcamaBaslik:"",harcamaAciklama:"",harcamaTarih:"",harcamaTutar:"",apartmanID:0};
  formControl:FormGroup;
  get tb1() { return this.formControl.controls; }
  
  ionViewWillEnter() {
    this.Detay();
  } 
  
  Detay(){ 
    var parent = this;
    var params =  {
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    },
    harcamaID:parent.id,
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("detail-expenses.php", formData, function (result) {
      
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

  Kaydet(){ 
    var parent = this;
    var params =  {
    
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    }, 
    harcamaBaslik:parent.data.harcamaBaslik,
    harcamaAciklama:parent.data.harcamaAciklama,
    harcamaTarih:parent.data.harcamaTarih,
    harcamaTutar:parent.data.harcamaTutar,
    harcamaID:parent.id,
    }
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("update-expenses.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.router.navigate(['/anasayfa/harcamalar/harcamakayitlari',{id:parent.data.apartmanID}]);

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
