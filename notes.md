https://www.concretepage.com/angular-2/ngrx/ngrx-store-4-angular-5-tutorial


Tutorial webpack angular 5 de: https://angular.io/guide/webpack

http://www.edc4it.com/blog/web/helloworld-angular2.html

https://github.com/nguyentk90/angular4-webpack3-seed

https://github.com/gdi2290/angular-starter



-----------

ngrx

https://appdividend.com/2018/01/31/angular-ngrx-store-tutorial-example-scratch/?utm_source=hashnode.com

http://mherman.org/blog/2018/04/17/authentication-in-angular-with-ngrx/?utm_campaign=NG-Newsletter&utm_medium=email&utm_source=NG-Newsletter_249#.WuLzQHWFO03



# MIS NOTAS

* Saco el index.html al raíz, considero que es una buena practica. Se comenta las lineas en webpack base y dev para cambiarlo dentro de src
* Creo carpeta static para meter estáticos del index (iconos, imagenes, etc), no tiene nada que ver con los assets del proyecto
* Una vez arrancado, actualizar dependencias:
  * webpack 4, hay que cambiar los chunks
  * html-webpack-plugin la configuracion cambian en la version 3
  * si se va a meter lodash, usar loader de lodash y exclusivamente importar lo que se use
  * Monment, lo mismo que lodash. Ver artículo: https://iamakulov.com/notes/webpack-front-end-size-caching/
  * Revisar Utils la parte de ngc-webpack con documentacion: https://github.com/shlomiassaf/ngc-webpack#usage
  * 
