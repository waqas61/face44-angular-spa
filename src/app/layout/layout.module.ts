import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, PanelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, SidebarComponent, PanelComponent
  ]  
})
export class LayoutModule { }
