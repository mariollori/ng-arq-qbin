import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskPage } from './modules/tasks/presentation/pages';
import { HeaderComponent } from './modules/common/components/header/header';
import { TaskCreateComponent } from './modules/tasks/presentation/components/task-create/task-create';
import { TaskCardListComponent } from './modules/tasks/presentation/components/task-card-list/task-card-list';

@NgModule({
  declarations: [
    AppComponent,
    TaskPage,
    HeaderComponent,
    TaskCreateComponent,
    TaskCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
