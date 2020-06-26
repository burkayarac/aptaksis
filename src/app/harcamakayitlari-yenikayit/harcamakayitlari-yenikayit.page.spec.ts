import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarcamakayitlariYenikayitPage } from './harcamakayitlari-yenikayit.page';

describe('HarcamakayitlariYenikayitPage', () => {
  let component: HarcamakayitlariYenikayitPage;
  let fixture: ComponentFixture<HarcamakayitlariYenikayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarcamakayitlariYenikayitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarcamakayitlariYenikayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
