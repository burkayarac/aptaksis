import { Component, OnInit } from '@angular/core'; 
import { DataIslemleriService } from 'src/app/app-services/data-islemleri.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-daireler-detay',
  templateUrl: './daireler-detay.page.html',
  styleUrls: ['./daireler-detay.page.scss'],
})
export class DairelerDetayPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
    this.apartmanid = JSON.parse(this.activatedRoute.snapshot.paramMap.get('apartmanid'));
    
   }
   id:any;
   apartmanid:any;
 
  ngOnInit() { 
    this.formControl = this.formBuilder.group({
      adisoyadi: ['', Validators.compose([Validators.required])], 
    }); 
  }
  
  submitted = false; 

  formControl:FormGroup;
  get tb1() { return this.formControl.controls; }
    
  data = {daireAdSoyad:""};

  ionViewWillEnter() {
    this.Detay();
    this.Liste();
  } 

  liste = [];
  Liste(){ 
    var parent = this;
    var params =  {
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    },
    daireID:parent.id,
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-dues-flat.php", formData, function (result) {
      
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
  
  Detay(){ 
    var parent = this;
    var params =  {
    loginBilgisi:{
      yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
      yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
    },
    daireID:parent.id,
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("detail-flat.php", formData, function (result) {
      
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
    daireID:parent.id,
    daireAdSoyad:parent.data.daireAdSoyad

    }
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    }
 
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("update-flat.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {  
        parent.router.navigate(['/anasayfa/apartmanlar/daireler',{id:parent.apartmanid}]);

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
