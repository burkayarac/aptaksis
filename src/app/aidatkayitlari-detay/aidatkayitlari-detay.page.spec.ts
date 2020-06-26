import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AidatkayitlariDetayPage } from './aidatkayitlari-detay.page';

describe('AidatkayitlariDetayPage', () => {
  let component: AidatkayitlariDetayPage;
  let fixture: ComponentFixture<AidatkayitlariDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidatkayitlariDetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AidatkayitlariDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
