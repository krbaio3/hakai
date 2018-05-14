import { Headers } from '@angular/http';

export class Utils {

    headers(): Headers {
        return new Headers({
            'Content-Type': 'application/json'
          });
    }

    body(param) {
        return JSON.stringify(param);
    }
}
