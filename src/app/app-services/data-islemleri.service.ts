import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataIslemleriService {

  public uyeBilgisi:any;
  
  //public domain:string = "http://localhost:8100/";
  public webservis:string = "https://lvyazilim.com/ws/";

  constructor(public httpModule: HttpClientModule, public http:HttpClient, public loadingCtrl: LoadingController, private router:Router) {


  }

async PostData(servicePath:string, prms:FormData, callback:Function)
{

  const loading = await this.loadingCtrl.create({});
    await loading.present();

    
    this.http.post(this.webservis + servicePath, prms)
      .subscribe(
        res => {

          loading.dismiss();
          callback(res);
          
        },
        err => {
          console.log(err);
          loading.dismiss();
        }
      );

}

 

async GirisYap(loginBilgisi) {
var parent = this; 

var formData = new FormData();
formData.append("dataString", JSON.stringify(loginBilgisi));
this.PostData("login.php", formData, function (result) {
  
  console.log(result);
  if (result.status == "success")
  {
    var data = result.data;
    window.localStorage.setItem("data", JSON.stringify(loginBilgisi));
    parent.uyeBilgisi = data;
    parent.router.navigate(['/anasayfa']);
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
