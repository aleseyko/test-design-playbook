import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestContentComponent } from './test-content/test-content.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdminPanelLinkComponent } from './admin-panel-link/admin-panel-link.component';


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
    AdminPanelLinkComponent
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
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
