import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarcamakayitlariPage } from './harcamakayitlari.page';

describe('HarcamakayitlariPage', () => {
  let component: HarcamakayitlariPage;
  let fixture: ComponentFixture<HarcamakayitlariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarcamakayitlariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarcamakayitlariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
