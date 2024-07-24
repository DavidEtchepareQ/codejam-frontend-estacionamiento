import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './icon.component.html'
})
export class IconComponent {
    @Input() name: string = 'info';

    @Input() title?: string;
    @Input() size?: string;
    @Input() fixed?: boolean;
    @Input() animation?: string;
    @Input() color: string;
    @Input() rotate?: string | number;
    @Input() inverse?: boolean;
    @Input() glow?: boolean;

    private _optionalClasses: string[] = [];

    constructor() { }

    ngOnInit(): any {
        if (!this.name) {
            throw new Error('Missing "name" property for Angular2 Font Awesome component');
        }

        if (this.size) {
            this.addToOptionalClasses(`fa-${this.size}`);
        }

        if (this.fixed) {
            this.addToOptionalClasses(`fa-fw`);
        }

        if (this.animation) {
            this.addToOptionalClasses(`fa-${this.animation}`);
        }

        if (this.rotate) {
            let rotateClass = (typeof this.rotate === 'number') ? `fa-rotate-${this.rotate}`
                : `fa-flip-${this.rotate}`;
            this.addToOptionalClasses(rotateClass);
        }

        if (this.inverse) {
            this.addToOptionalClasses(`fa-inverse`);
        }

        if (this.glow) {
            this.addToOptionalClasses(`glow`);
        }
    }

    get optionalClasses() {
        return this._optionalClasses;
    }

    private addToOptionalClasses(addClass: string): void {
        this._optionalClasses.push(addClass);
    }
}
