import { TaskListComponent } from './../tasklist/tasklist-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

/** Perfect scrollbar */
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

/** message */
import { Ng2IziToastModule } from 'ng2-izitoast';
import { MessageService } from './../services/message-service';

/** translate */
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 

import { AppComponent } from './app.component';
import { TaskService } from '../services/task-service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MalihuScrollbarModule.forRoot(),
    Ng2IziToastModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    MessageService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
