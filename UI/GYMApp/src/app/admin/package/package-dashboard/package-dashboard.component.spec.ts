import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDashboardComponent } from './package-dashboard.component';

describe('PackageDashboardComponent', () => {
  let component: PackageDashboardComponent;
  let fixture: ComponentFixture<PackageDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageDashboardComponent]
    });
    fixture = TestBed.createComponent(PackageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
