import { Component, OnInit } from '@angular/core';
import { NavLink } from './nav-link/nav-link.component';

@Component({
  selector: 'tks-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  navItems: NavLink[] = [
    {
      name: 'Home',
      link: '/home',
      icon: 'home',
    },
    {
      name: 'Restaurants',
      link: '/restaurants',
      icon: 'restaurant',
    },
    {
      name: 'Hotels',
      link: '/hotels',
      icon: 'hotel',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
