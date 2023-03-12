import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFooterLinksComponent } from './sub-footer-links.component';

describe('SubFooterLinksComponent', () => {
  let component: SubFooterLinksComponent;
  let fixture: ComponentFixture<SubFooterLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFooterLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
