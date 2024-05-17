import * as i0 from '@angular/core';
import { input, Component, Input } from '@angular/core';

class MyLibComponent {
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

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent };
//# sourceMappingURL=my-lib.mjs.map
