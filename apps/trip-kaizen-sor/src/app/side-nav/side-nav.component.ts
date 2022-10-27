import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NavLink, NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'tks-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    NavLinkComponent
  ],
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
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
