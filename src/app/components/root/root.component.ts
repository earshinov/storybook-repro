import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p><button (click)="loading = !loading">Toggle loading</button></p>
    <p><button [ladda]="loading">Ladda button</button></p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {

  loading = false;
}
