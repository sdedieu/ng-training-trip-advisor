import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http-interceptor';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [
    CommonModule, UiModule
  ],
  exports: [
    UiModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  declarations: [],
})
export class SharedLibModule {}
