import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GirisyapPage } from './girisyap.page';

describe('GirisyapPage', () => {
  let component: GirisyapPage;
  let fixture: ComponentFixture<GirisyapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisyapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GirisyapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
