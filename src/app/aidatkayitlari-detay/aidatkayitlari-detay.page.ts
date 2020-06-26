import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aidatkayitlari-detay',
  templateUrl: './aidatkayitlari-detay.page.html',
  styleUrls: ['./aidatkayitlari-detay.page.scss'],
})
export class AidatkayitlariDetayPage implements OnInit {

  
  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  id:any;
  ngOnInit() { 
    this.formControl = this.formBuilder.group({
      tarih: ['', Validators.compose([Validators.required])], 
      tutar: ['',Validators.compose([Validators.required, Validators.min(1), Validators.max(100000)])], 
      durum: [''], 
    }); 
  }


  minDate:string = new Date(((new Date()).setFullYear((new Date()).getFullYear()))).toISOString();
  maxDate:string = new Date(((new Date()).setFullYear((new Date()).getFullYear() + 10))).toISOString();

  submitted = false; 

  data = {aidatTahsilatTarihi:"",aidatOdenenTutar:"",aidatOdenecekTutar:"",aidatDurum:"",apartmanID:0};
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
    aidatID:parent.id,
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("detail-dues.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.data = result.data;
        parent.data.aidatOdenenTutar = parent.data.aidatOdenecekTutar;
        parent.data.aidatDurum = "Ödenmiş";
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
    aidatTahsilatTarihi:parent.data.aidatTahsilatTarihi,
    aidatOdenenTutar:parent.data.aidatOdenenTutar,
    aidatDurum:parent.data.aidatDurum,
    aidatID:parent.id,
    }
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("update-dues.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.router.navigate(['/anasayfa/aidatlar/aidatkayitlari',{id:parent.data.apartmanID}]);

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
