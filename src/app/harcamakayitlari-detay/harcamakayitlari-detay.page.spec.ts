import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarcamakayitlariDetayPage } from './harcamakayitlari-detay.page';

describe('HarcamakayitlariDetayPage', () => {
  let component: HarcamakayitlariDetayPage;
  let fixture: ComponentFixture<HarcamakayitlariDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarcamakayitlariDetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarcamakayitlariDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
