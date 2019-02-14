import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpRequestInterceptor } from './interceptor.module';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, 
        useClass: HttpRequestInterceptor, 
        multi: true 
    },
];