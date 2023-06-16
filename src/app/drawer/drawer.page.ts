import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.page.html',
  styleUrls: ['./drawer.page.scss'],
})
export class DrawerPage implements OnInit {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'calendar'
    },
    // Add more pages as needed
  ];

  constructor() { }

  ngOnInit() {
  }

}
