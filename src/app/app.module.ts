import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { OffersComponent } from './offers/offers.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { FooterComponent } from './footer/footer.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { DirectionsModalComponent } from './directions-modal/directions-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        IntroComponent,
        OffersComponent,
        AboutComponent,
        PublicationsComponent,
        FooterComponent,
        ContactModalComponent,
        DirectionsModalComponent
    ],
    entryComponents: [
        ContactModalComponent,
        DirectionsModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
