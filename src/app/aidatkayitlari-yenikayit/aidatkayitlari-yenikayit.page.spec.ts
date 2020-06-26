import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AidatkayitlariYenikayitPage } from './aidatkayitlari-yenikayit.page';

describe('AidatkayitlariYenikayitPage', () => {
  let component: AidatkayitlariYenikayitPage;
  let fixture: ComponentFixture<AidatkayitlariYenikayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidatkayitlariYenikayitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AidatkayitlariYenikayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
