import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { SpecialDishComponent } from './specialDish/specialDish.component';
import { MenuComponent } from './menu/menu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ReservationComponent } from './reservation/reservation.component';

// Service
// import { xxx } from '@service';

// Pipe && Component
// import { xxx } from '@pipeModule';
// import { xxx } from '@comModule';
import { FeaturesComponent } from './features/features.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [			
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    SpecialDishComponent,
    MenuComponent,
    TestimonialsComponent,
    ReservationComponent,
      FeaturesComponent,
      EventComponent,
      FooterComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
