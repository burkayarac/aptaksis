import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aidatkayitlari-yenikayit',
  templateUrl: './aidatkayitlari-yenikayit.page.html',
  styleUrls: ['./aidatkayitlari-yenikayit.page.scss'],
})
export class AidatkayitlariYenikayitPage implements OnInit {

  
  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  id:any;
  ngOnInit() { 
    this.formControl = this.formBuilder.group({
      tarih: ['', Validators.compose([Validators.required])], 
      tutar: ['',Validators.compose([Validators.required, Validators.min(1), Validators.max(100000)])], 
    }); 
  }


  minDate:string = new Date(((new Date()).setFullYear((new Date()).getFullYear()))).toISOString();
  maxDate:string = new Date(((new Date()).setFullYear((new Date()).getFullYear() + 10))).toISOString();

  submitted = false; 

  data = {aidatOdemeTarihi:"",aidatOdenecekTutar:""};
  formControl:FormGroup;
  get tb1() { return this.formControl.controls; }
  Kaydet(){ 
    var parent = this;
    var params =  {
    
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    },
    aidatOdemeTarihi:parent.data.aidatOdemeTarihi,
    aidatOdenecekTutar:parent.data.aidatOdenecekTutar,
    apartmanID:parent.id,

    }
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("create-dues.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.router.navigate(['/anasayfa/aidatlar/aidatkayitlari',{id:parent.id}]);

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
