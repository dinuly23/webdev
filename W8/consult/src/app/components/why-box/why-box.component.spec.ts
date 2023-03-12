import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBoxComponent } from './why-box.component';

describe('WhyBoxComponent', () => {
  let component: WhyBoxComponent;
  let fixture: ComponentFixture<WhyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
