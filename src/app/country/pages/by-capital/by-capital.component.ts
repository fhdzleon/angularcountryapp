import { Component, inject } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  countryService = inject(CountryService);
}
