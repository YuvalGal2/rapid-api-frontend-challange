import {Component, Input} from '@angular/core';
import {DataService} from '../services/shared/data.service';
import {MenuItem} from '../models/menu-item.model';
import {StateService} from '../services/shared/state.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  readonly env = environment;
  @Input('menuItems') menuItems: MenuItem[] = [];
  constructor(private dataService: DataService,
              private stateService: StateService) { }

  toggleSideNav(): void {
    this.stateService.setSideNavState();
  }

}
