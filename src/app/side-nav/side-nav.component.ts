import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {MenuItem} from '../models/menu-item.model';
import {Subscription} from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  readonly env = environment;
  @Input('menuItems') menuItems: MenuItem[] = [];
  menuState: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) {}


  toggleMenu() {
    this.menuState = !this.menuState;
  }
}
