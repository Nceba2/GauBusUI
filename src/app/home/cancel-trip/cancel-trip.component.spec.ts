import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelTripComponent } from './cancel-trip.component';

describe('CancelTripComponent', () => {
  let component: CancelTripComponent;
  let fixture: ComponentFixture<CancelTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelTripComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
