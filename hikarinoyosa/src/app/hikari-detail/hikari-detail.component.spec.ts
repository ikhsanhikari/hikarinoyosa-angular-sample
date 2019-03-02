import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikariDetailComponent } from './hikari-detail.component';

describe('HikariDetailComponent', () => {
  let component: HikariDetailComponent;
  let fixture: ComponentFixture<HikariDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikariDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikariDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
