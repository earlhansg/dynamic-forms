import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

  @ViewChild('drawer') drawer: MatSidenav;

  constructor() { }

  ngOnInit(): void { }

  toggle(): void {
    this.drawer.toggle();
  }

}
