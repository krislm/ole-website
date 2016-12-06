import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ole-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menuOpen: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    goTo(location: string): void {
        window.location.hash = location;
    }

    openMenu() {
        this.menuOpen = true;
    }

    closeMenu() {
        this.menuOpen = false;
    }

}
