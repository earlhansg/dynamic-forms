import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('sideNav') sideNav: SideNavComponent;


  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.sideNav.toggle();
    this.cdref.detectChanges();
  }

  toggleSideBar(): void {
    this.sideNav.toggle();
  }

}
