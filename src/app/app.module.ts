import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './main-screen/projects/projects.component';
import { EventsComponent } from './main-screen/events/events.component';
import { ArticlesComponent } from './main-screen/articles/articles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TeamComponent } from './main-screen/team/team.component';
import { RecruitmentComponent } from './main-screen/recruitment/recruitment.component';
import { CardsComponent } from './cards/cards.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './shared/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeadingComponent } from './page-heading/page-heading.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    EventsComponent,
    ArticlesComponent,
    NavbarComponent,
    MainScreenComponent,
    TeamComponent,
    RecruitmentComponent,
    CardsComponent,
    HeadingComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
