import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarcamalarPage } from './harcamalar.page';

describe('HarcamalarPage', () => {
  let component: HarcamalarPage;
  let fixture: ComponentFixture<HarcamalarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarcamalarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarcamalarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
