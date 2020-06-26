import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartmanlar-yenikayit',
  templateUrl: './apartmanlar-yenikayit.page.html',
  styleUrls: ['./apartmanlar-yenikayit.page.scss'],
})
export class ApartmanlarYenikayitPage implements OnInit {

  
  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService, private router:Router) { }

  ngOnInit() { 
    this.formControl = this.formBuilder.group({
      apartmanbaslik: ['', Validators.compose([Validators.required])], 
      daireadet: ['',Validators.compose([Validators.required, Validators.min(1), Validators.max(99)])], 
    }); 
  }
  submitted = false; 

  data = {apartmanBaslik:"",daireAdet:""};
  formControl:FormGroup;aidatkayitlari
  get tb1() { return this.formControl.controls; }
  Kaydet(){ 
    var parent = this;
    var params =  {
    
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    },
    apartmanBaslik:parent.data.apartmanBaslik,
    daireAdet:parent.data.daireAdet,

    }
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("create-apartment.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.router.navigate(['/anasayfa/apartmanlar']);

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
