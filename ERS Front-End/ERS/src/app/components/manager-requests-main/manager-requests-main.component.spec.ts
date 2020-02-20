import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRequestsMainComponent } from './manager-requests-main.component';

describe('ManagerRequestsMainComponent', () => {
  let component: ManagerRequestsMainComponent;
  let fixture: ComponentFixture<ManagerRequestsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRequestsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRequestsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
