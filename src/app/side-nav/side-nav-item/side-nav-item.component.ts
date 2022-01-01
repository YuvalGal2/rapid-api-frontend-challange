import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../models/menu-item.model';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input('menuItem') menuItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
  }

}
