import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: Object = null;
  private env: Object = null;

  constructor(private http: Http) {}

  public getConfig(key: any) {
    return this.config[key];
  }

  public getAllConfig() {
    return this.config;
  }

  public getEnv(key: any) {
    return this.env[key];
  }

  public load(url: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(url)
        .pipe(map(res => res.json()))
        .pipe(
          catchError(
            (error: any): any => {
              console.log('Configuration file "env.json" could not be read');
              resolve(true);
              return Observable.throw(error.json().error || 'Server error');
            }
          )
        )
        .subscribe(envResponse => {
          this.env = envResponse;
          let request: any = null;

          switch (envResponse.env) {
            case 'production':
              {
                request = this.http.get(
                  './assets/config/config.' + envResponse.env + '.json'
                );
              }
              break;

            case 'development':
              {
                request = this.http.get(
                  './assets/config/config.' + envResponse.env + '.json'
                );
              }
              break;

            case 'default':
              {
                console.error('Environment file is not set or invalid');
                resolve(true);
              }
              break;
          }

          if (request) {
            request
              .pipe(map(res => res))
              .pipe(
                catchError((error: any) => {
                  console.error(
                    'Error reading ' + envResponse.env + ' configuration file'
                  );
                  resolve(error);
                  return Observable.throw(error.json().error || 'Server error');
                })
              )
              .subscribe((responseData: any) => {
                this.config = responseData;
                console.log(this.config);
                resolve(true);
              });
          } else {
            console.error('Env config file "env.json" is not valid');
            resolve(true);
          }
        });
    });
  }
}
