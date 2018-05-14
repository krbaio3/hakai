import { Headers } from '@angular/http';

export class Utils {

    public url(): string {
        return 'https://hakai-ng-app.firebaseio.com/heroes.json';
    }

    public headers(): Headers {
        return new Headers({
            'Content-Type': 'application/json'
          });
    }

    public body(param) {
        return JSON.stringify(param);
    }
}
