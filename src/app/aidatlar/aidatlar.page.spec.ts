import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AidatlarPage } from './aidatlar.page';

describe('AidatlarPage', () => {
  let component: AidatlarPage;
  let fixture: ComponentFixture<AidatlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidatlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AidatlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
