import { Component, Input, input } from '@angular/core';
import * as i0 from "@angular/core";
export class MyLibComponent {
    constructor() {
        this.mySignalInput = input();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.9", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.9", type: MyLibComponent, isStandalone: true, selector: "lib-my-lib", inputs: { mySignalInput: { classPropertyName: "mySignalInput", publicName: "mySignalInput", isSignal: true, isRequired: false, transformFunction: null }, myDefaultInput: { classPropertyName: "myDefaultInput", publicName: "myDefaultInput", isSignal: false, isRequired: false, transformFunction: null } }, ngImport: i0, template: `
    <p>
      my-lib works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.9", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', standalone: true, imports: [], template: `
    <p>
      my-lib works!
    </p>
  ` }]
        }], propDecorators: { myDefaultInput: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQWV0RCxNQUFNLE9BQU8sY0FBYztJQVgzQjtRQVlFLGtCQUFhLEdBQUcsS0FBSyxFQUFrQixDQUFDO0tBRXpDOzhHQUhZLGNBQWM7a0dBQWQsY0FBYyxzWEFQZjs7OztHQUlUOzsyRkFHVSxjQUFjO2tCQVgxQixTQUFTOytCQUNFLFlBQVksY0FDVixJQUFJLFdBQ1AsRUFBRSxZQUNEOzs7O0dBSVQ7OEJBS1EsY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgaW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIE15VmFyaWFibGVUeXBlID0gJ0EnIHwgJ0InIHwgJ0MnIHwgJ0QnIHwgJ0UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXktbGliJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteS1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IGBgXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IHtcbiAgbXlTaWduYWxJbnB1dCA9IGlucHV0PE15VmFyaWFibGVUeXBlPigpO1xuICBASW5wdXQoKSBteURlZmF1bHRJbnB1dD86IE15VmFyaWFibGVUeXBlO1xufVxuIl19