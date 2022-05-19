import { Component, Input, OnInit } from '@angular/core';

export interface NavLink {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'tks-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent implements OnInit {
  @Input() navLink!: NavLink;

  constructor() {}

  ngOnInit(): void {}
}
