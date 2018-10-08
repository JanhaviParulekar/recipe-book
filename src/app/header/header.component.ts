import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    @Output() selectionMade = new EventEmitter<string>();
    
    onSelect(selection: string){
        this.selectionMade.emit(selection);
    }
}