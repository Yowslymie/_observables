import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableHandleButtonClicksComponent } from './observable-handle-button-clicks.component';

describe('ObservableHandleButtonClicksComponent', () => {
  let component: ObservableHandleButtonClicksComponent;
  let fixture: ComponentFixture<ObservableHandleButtonClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableHandleButtonClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableHandleButtonClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
