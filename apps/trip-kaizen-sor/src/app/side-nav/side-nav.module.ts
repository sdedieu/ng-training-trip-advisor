import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { NavLinkComponent } from "./nav-link/nav-link.component";
import { SideNavComponent } from "./side-nav.component";

@NgModule({
  declarations: [SideNavComponent, NavLinkComponent],
  imports: [
      CommonModule,
      MatListModule,
      MatIconModule,
      RouterModule
  ],
  exports: [
    SideNavComponent, NavLinkComponent
  ]
})
export class SideNavModule {}