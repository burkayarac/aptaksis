import { Component, OnInit } from '@angular/core';
import { DataIslemleriService } from '../app-services/data-islemleri.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {

  constructor(  private dataService:DataIslemleriService,private router:Router) {}

  ngOnInit() {
  }

}
