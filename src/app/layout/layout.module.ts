import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelComponent } from './panel/panel.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, PanelComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    NavbarComponent, SidebarComponent, PanelComponent
  ]  
})
export class LayoutModule { }
