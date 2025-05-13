import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-by-code',
  imports: [],
  templateUrl: './by-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCodeComponent {}
