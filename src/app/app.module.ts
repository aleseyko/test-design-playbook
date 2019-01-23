import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestContentComponent } from './test-content/test-content.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FullResultContainerComponent } from './full-result-container/full-result-container.component';
import { AdminPanelLinkComponent } from './admin-panel-link/admin-panel-link.component';
import { AdminPanelLinkInfoComponent } from './admin-panel-link-info/admin-panel-link-info.component';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultsCardComponent } from './results-card/results-card.component';
import { MatMenuModule } from '@angular/material';

// service
import { JwtInterceptorService } from './components/shared/interceptors/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarThumbnailComponent,
    GetStartedComponent,
    ThxPageComponent,
    TestContentComponent,
    SidebarComponent,
    AdminLoginComponent,
    AdminPanelLinkComponent,
    AdminPanelLinkInfoComponent,
    FullResultContainerComponent,
    ResultItemComponent,
    AdminNavbarComponent,
    ResultsPageComponent,
    ResultsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
