import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyMeetingsPage } from './monthly-meetings.page';

describe('MonthlyMeetingsPage', () => {
  let component: MonthlyMeetingsPage;
  let fixture: ComponentFixture<MonthlyMeetingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthlyMeetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
