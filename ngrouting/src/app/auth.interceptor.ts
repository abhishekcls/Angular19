import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('auth interceptor', req.url);
  if (req.url.startsWith('https://jsonplaceholder.typicode.com/posts')) {//this token will not be there in users api call
    let jwt = localStorage.getItem('jwt');
    let clonereq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt}`
      }
    });
    return next(clonereq);
  }
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));;
};
