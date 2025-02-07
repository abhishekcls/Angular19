import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'nested',
    standalone: false,
    template: `
    <h2>Nested</h2>{{emp | json}}<button (click)="sendToParent()">send</button>
    `
})
export class NestedComponent {
    @Input() emp: any;

    @Output() myevent: EventEmitter<any> = new EventEmitter();
    sendToParent() {
        this.myevent.emit(this.emp.ename);
    }

}