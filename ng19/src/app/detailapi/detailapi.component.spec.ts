import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailapiComponent } from './detailapi.component';

describe('DetailapiComponent', () => {
  let component: DetailapiComponent;
  let fixture: ComponentFixture<DetailapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
