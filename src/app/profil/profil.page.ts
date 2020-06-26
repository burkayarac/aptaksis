  import { Component } from '@angular/core';
  import { DataIslemleriService } from 'src/app/app-services/data-islemleri.service';
  import { Validators, FormBuilder, FormGroup } from '@angular/forms';
   
  
  @Component({
    selector: 'app-profil',
    templateUrl: './profil.page.html',
    styleUrls: ['./profil.page.scss'],
  })
  export class ProfilPage  {
  
    constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService) { }
   
    ngOnInit() { 
      this.formControl = this.formBuilder.group({
        adisoyadi: ['', Validators.compose([Validators.required])],
        sifre: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      });  
    }
    
    submitted = false; 
  
    formControl:FormGroup;
    get tb1() { return this.formControl.controls; }
      
    data = {
      yoneticiAdSoyad:this.dataService.uyeBilgisi.yoneticiAdSoyad,
      yoneticiSifre:this.dataService.uyeBilgisi.yoneticiSifre,
    }
  
    ionViewWillEnter() {
    } 
    
    Guncelle(){ 
      var parent = this;
      var params = {
        loginBilgisi:{
          yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
          yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
        },
        yoneticiAdSoyad: parent.data.yoneticiAdSoyad,
        yoneticiSifre: parent.data.yoneticiSifre,
      } 
      console.log(params)
   
      parent.submitted = true;
      if (parent.formControl.invalid) {
        return;
      }
   
      
      var formData = new FormData();
      formData.append("dataString", JSON.stringify(params));
      this.dataService.PostData("update-profile.php", formData, function (result) {
        
        console.log(result);
        if (result.status == "success")
        {
          //parent.liste = result.data;
          alert(result.message);  
          parent.dataService.uyeBilgisi.yoneticiAdSoyad = parent.data.yoneticiAdSoyad;
          parent.dataService.uyeBilgisi.yoneticiSifre = parent.data.yoneticiSifre;
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
  