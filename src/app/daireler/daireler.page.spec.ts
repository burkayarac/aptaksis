import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DairelerPage } from './daireler.page';

describe('DairelerPage', () => {
  let component: DairelerPage;
  let fixture: ComponentFixture<DairelerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairelerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DairelerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
