import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApartmanlarPage } from './apartmanlar.page';

describe('ApartmanlarPage', () => {
  let component: ApartmanlarPage;
  let fixture: ComponentFixture<ApartmanlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmanlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApartmanlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
