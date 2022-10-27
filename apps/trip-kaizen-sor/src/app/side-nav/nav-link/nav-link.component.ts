import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export interface NavLink {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'tks-nav-link',
  standalone: true,
  imports: [
    RouterModule, 
    MatListModule,
    MatIconModule
  ],
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent implements OnInit {
  @Input() navLink!: NavLink;

  constructor() {}

  ngOnInit(): void {}
}
