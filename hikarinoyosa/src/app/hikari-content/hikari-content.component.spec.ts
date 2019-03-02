import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikariContentComponent } from './hikari-content.component';

describe('HikariContentComponent', () => {
  let component: HikariContentComponent;
  let fixture: ComponentFixture<HikariContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikariContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikariContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
