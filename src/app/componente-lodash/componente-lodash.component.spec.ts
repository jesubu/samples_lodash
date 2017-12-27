import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLodashComponent } from './componente-lodash.component';

describe('ComponenteLodashComponent', () => {
  let component: ComponenteLodashComponent;
  let fixture: ComponentFixture<ComponenteLodashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteLodashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteLodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
