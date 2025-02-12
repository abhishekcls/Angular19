import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RformComponent } from './rform.component';

describe('RformComponent', () => {
  let component: RformComponent;
  let fixture: ComponentFixture<RformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
