import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApartmanlarYenikayitPage } from './apartmanlar-yenikayit.page';

describe('ApartmanlarYenikayitPage', () => {
  let component: ApartmanlarYenikayitPage;
  let fixture: ComponentFixture<ApartmanlarYenikayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmanlarYenikayitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApartmanlarYenikayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
