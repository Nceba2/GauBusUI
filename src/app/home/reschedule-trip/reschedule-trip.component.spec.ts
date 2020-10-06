import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RescheduleTripComponent } from './reschedule-trip.component';

describe('RescheduleTripComponent', () => {
  let component: RescheduleTripComponent;
  let fixture: ComponentFixture<RescheduleTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescheduleTripComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RescheduleTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
