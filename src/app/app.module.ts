import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
