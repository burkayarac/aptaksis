import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaporPage } from './rapor.page';

describe('RaporPage', () => {
  let component: RaporPage;
  let fixture: ComponentFixture<RaporPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaporPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaporPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
