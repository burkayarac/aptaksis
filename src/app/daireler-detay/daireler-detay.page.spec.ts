import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DairelerDetayPage } from './daireler-detay.page';

describe('DairelerDetayPage', () => {
  let component: DairelerDetayPage;
  let fixture: ComponentFixture<DairelerDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairelerDetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DairelerDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
