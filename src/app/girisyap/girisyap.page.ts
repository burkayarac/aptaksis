import { Component } from '@angular/core';
import { DataIslemleriService } from 'src/app/app-services/data-islemleri.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-girisyap',
  templateUrl: './girisyap.page.html',
  styleUrls: ['./girisyap.page.scss'],
})
export class GirisyapPage  {

  constructor(public formBuilder: FormBuilder, private dataService:DataIslemleriService) { }
 
  ngOnInit() { 
    this.formControl = this.formBuilder.group({ 
      eposta: ['', Validators.compose([Validators.email])], 
      sifre: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    }); 
  }
  
  submitted = false; 

  formControl:FormGroup;
  get tb1() { return this.formControl.controls; }
     
  

  data = {
    yoneticiEposta : "",
    yoneticiSifre : "",
  }

  liste:any = {};
  GirisYap(){
    var parent = this;
    parent.submitted = true;
    if (parent.formControl.invalid) {
      return;
    } 
    var prms = {}
    prms["yoneticiEposta"] = parent.data.yoneticiEposta;
    prms["yoneticiSifre"] = parent.data.yoneticiSifre;

    this.dataService.GirisYap(prms);
 
  } 

}
