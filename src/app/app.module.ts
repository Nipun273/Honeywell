import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { CaddyComponent } from './caddy/caddy.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthenticationService } from './services/authentication.service';
import { CategoryComponent } from './category/category/category.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from './category/add-category/add-category.component';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    CaddyComponent,
    ClientComponent,
    ProductComponent,
    PaymentComponent,
    CategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatCardModule,NgbModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
