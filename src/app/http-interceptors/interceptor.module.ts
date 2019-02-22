import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Configurações para acesso local
    //  const apiRequest = req.clone({ url: `http://localhost:8080/api/v1/${req.url}` });

    // Configurações para acesso externo
    // Rodar o comando ng serve --host ip
    const apiRequest = req.clone({ url: `http://192.168.100.26:8090/api/v1/${req.url}` });
    return next.handle(apiRequest);
  }
}