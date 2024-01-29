import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 isActive = false;
 activeLink: string= 'Home';

 toggleMenu(): void {
   this.isActive = !this.isActive;
 }

 setActiveLink(link: string): void {
   this.activeLink = link;
 }
}

//comment
