import { Component } from '@angular/core';
import { HomePage } from '../app/pages/home/home.page';
import { AboutPage } from '../app/pages/about/about.page';
import { MenuPage } from '../app/pages/menu/menu.page';
import { ContactPage } from '../app/pages/contact/contact.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  page: Array<{title: string, icon: string, component: any}>;

  public pages = [
    { title: 'Home', icon: 'home', link: 'home' },
    { title: 'About Us', icon: 'information-circle', link: 'about' },
    { title: 'Menu', icon: 'book', link:'menu' },
    { title: 'Contact Us', icon: 'person-circle', link:'contact' }
  ];
  
  constructor() {}
}
