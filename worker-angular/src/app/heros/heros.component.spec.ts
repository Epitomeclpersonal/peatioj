import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosComponent } from './heros.component';

describe('HerosComponent', () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
