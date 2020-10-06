import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookTripComponent } from './book-trip.component';

describe('BookTripComponent', () => {
  let component: BookTripComponent;
  let fixture: ComponentFixture<BookTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTripComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
