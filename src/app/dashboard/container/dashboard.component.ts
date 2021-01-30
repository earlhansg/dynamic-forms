import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  isOpen = true;


  constructor() { }

  ngOnInit(): void { }

  toggleSideBar(): void {
    this.isOpen = !this.isOpen;
  }

}
