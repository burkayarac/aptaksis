import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AidatkayitlariPage } from './aidatkayitlari.page';

describe('AidatkayitlariPage', () => {
  let component: AidatkayitlariPage;
  let fixture: ComponentFixture<AidatkayitlariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidatkayitlariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AidatkayitlariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
