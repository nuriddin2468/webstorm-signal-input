import * as i0 from "@angular/core";
type MyVariableType = 'A' | 'B' | 'C' | 'D' | 'E';
export declare class MyLibComponent {
    mySignalInput: import("@angular/core").InputSignal<MyVariableType | undefined>;
    myDefaultInput?: MyVariableType;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyLibComponent, "lib-my-lib", never, { "mySignalInput": { "alias": "mySignalInput"; "required": false; "isSignal": true; }; "myDefaultInput": { "alias": "myDefaultInput"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
