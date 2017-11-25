import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataService } from '../data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


import { HomeComponent } from './home.component';

xdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, BrowserAnimationsModule ],
      declarations: [ HomeComponent ],
      providers: [DataService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
