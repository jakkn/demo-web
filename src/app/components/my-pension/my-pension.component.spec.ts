import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPensionComponent } from './my-pension.component';

describe('MyPensionComponent', () => {
  let component: MyPensionComponent;
  let fixture: ComponentFixture<MyPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
