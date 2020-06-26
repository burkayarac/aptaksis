import { Component, OnInit } from '@angular/core';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-apartmanlar',
  templateUrl: './apartmanlar.page.html',
  styleUrls: ['./apartmanlar.page.scss'],
})
export class ApartmanlarPage implements OnInit {

  constructor(public alertController: AlertController,private dataService:DataIslemleriService) { }


  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ApartmanListe();
    }, 1000);
  }
  

  ngOnInit() {
  }
 
  ionViewWillEnter() {
    this.ApartmanListe();
  } 
  liste = [];
  ApartmanListe(){ 
    var parent = this;
    console.log(parent.dataService.uyeBilgisi);
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      } 
    }
    console.log(params);
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("list-apartment.php", formData, function (result) {
      
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

  
  async silConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Silmek istediğinize emin misiniz?',
      message: 'Bu apartman ile ilgili tüm veriler kalıcı olarak silinecektir.',
      buttons: [
        {
          text: 'Vazgeç',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('vazgeçildi');
          }
        }, {
          text: 'Onaylıyorum',
          handler: () => {
            this.Sil(id);
          }
        }
      ]
    });

    await alert.present();
  }

  
  Sil(id){ 
    var parent = this;
    console.log(parent.dataService.uyeBilgisi);
    var params = {
      loginBilgisi:{
        yoneticiEposta :parent.dataService.uyeBilgisi.yoneticiEposta,
        yoneticiSifre : parent.dataService.uyeBilgisi.yoneticiSifre,
      },
      apartmanID:id
    }
    console.log(params);
  
    var formData = new FormData();
    formData.append("dataString", JSON.stringify(params));
    this.dataService.PostData("delete-apartment.php", formData, function (result) {
      
      console.log(result);
      if (result.status == "success")
      {
        parent.ApartmanListe();
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
