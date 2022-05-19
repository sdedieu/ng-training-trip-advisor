import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tks-root',
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
