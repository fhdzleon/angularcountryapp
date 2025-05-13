import { Component } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'country-by-country',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {}
