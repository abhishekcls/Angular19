import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdetail2Component } from './userdetail2.component';

describe('Userdetail2Component', () => {
  let component: Userdetail2Component;
  let fixture: ComponentFixture<Userdetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Userdetail2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
