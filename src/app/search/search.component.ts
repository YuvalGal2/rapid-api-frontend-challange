import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{


  // default values assigning
  defaultSearchValue: string = 'Action Movies';

  // form validation
  searchForm = new FormGroup({
    search: new FormControl(this.defaultSearchValue, [
      Validators.required,
    ]),
  });

  constructor(private searchService: SearchService) { }

// checking if the validation has passed.
  private isValidText(): boolean {
    if (this.searchForm.valid) {
      return true;
    }
    return false;
  }

  // use the search servcie to update the obs -> will update the state
  private updateTypedData(): void {
    this.searchService.setSearchObserable(this.searchForm.value.search);
  }

  // check for validation -> submit the data
  onSubmit () {
    if (this.isValidText()) {
      this.updateTypedData();
    }
  }

}
