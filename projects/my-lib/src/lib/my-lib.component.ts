import {Component, Input, input} from '@angular/core';

type MyVariableType = 'A' | 'B' | 'C' | 'D' | 'E';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [],
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: ``
})
export class MyLibComponent {
  mySignalInput = input<MyVariableType>();
  @Input() myDefaultInput?: MyVariableType;
}
