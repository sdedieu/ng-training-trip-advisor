import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedLibModule } from '@trip-kaizen-sor-workspace/shared-lib';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'tks-root',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    SideNavComponent,
    SharedLibModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  small!: boolean; 

  constructor() {
    this.small = window.innerWidth < 600;
  }

  ngOnInit(): void {
    window.onresize = () => {
      this.small = window.innerWidth < 600;
    };
  }
}
