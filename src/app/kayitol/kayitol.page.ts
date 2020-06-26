import { Component } from '@angular/core';
import { DataIslemleriService } from 'src/app/app-services/data-islemleri.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
 

@Component({
  selector: 'app-kayitol',
  templateUrl: './kayitol.page.html',
  styleUrls: ['./kayitol.page.scss'],
})
export class KayitolPage  {

  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService) { }
 
  ngOnInit() { 
    this.formControl = this.formBuilder.group({
      adisoyadi: ['', Validators.compose([Validators.required])], 
      eposta: ['', Validators.compose([Validators.email])], 
      sifre: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    }); 
  }
  
  submitted = false; 

  formControl:FormGroup;
  get tb1() { return this.formControl.controls; }
    
  data = {
    yoneticiAdSoyad:"",
    yoneticiEposta:"",
    yoneticiSifre:"",
  }

  ionViewWillEnter() {
  } 
  
  KayitOl(){ 
    var parent = this;
    var params =  parent.data;
 
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("register.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        //parent.liste = result.data;
        alert(result.message);
        
        var prms = {}
        prms["yoneticiEposta"] = parent.data.yoneticiEposta;
        prms["yoneticiSifre"] = parent.data.yoneticiSifre;

        parent.dataService.GirisYap(prms);

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
