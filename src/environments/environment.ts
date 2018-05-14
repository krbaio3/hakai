// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  fireConfig: {
    apiKey: 'AIzaSyANbbXS2CAnD5NrlyzrwAJFr0wlMLtsjxY',
    authDomain: 'bzz-poc.firebaseapp.com',
    databaseURL: 'https://bzz-poc.firebaseio.com',
    projectId: 'bzz-poc',
    storageBucket: 'bzz-poc.appspot.com',
    messagingSenderId: '426998672657'
  },
};
