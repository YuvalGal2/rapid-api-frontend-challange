import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from './services/shared/state.service';
import {DataService} from './services/shared/data.service';
import {MenuItem} from './models/menu-item.model';
import {MatDialog} from '@angular/material/dialog';
import {MessageModalComponent} from './message-modal/message-modal.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private subscriptions = new Subscription();
  darkModeTheme: boolean = false;
  menuItems: MenuItem[] = [];

  constructor(
    private stateService: StateService,
    private dataService: DataService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchMenuData();
    this.stateService.getFavoritesMovies();
    this.listenForErrors();
  }

  private listenForErrors(): void {
    this.subscriptions.add(
      this.dataService.getRequestErrorsObs().subscribe((error) => {
      this.openErrorDialog(error);
      }));
  }

  private openErrorDialog(error: any ): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '250px',
      data: {dialogHeader:error.status, dialogContent:error.error.Message}
    });
  }

  private fetchMenuData(): void {
    this.subscriptions.add(
      this.dataService.sendRequest('./assets/mockData/menu-data.json','get').subscribe((res) => {
      this.menuItems = res;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

