import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withOutPicture'
})
export class WithOutPicturePipe implements PipeTransform {
  transform(imagenes: any[]): any {

    const noimage = 'assets/img_spoty/noimage.png';

    if (!imagenes) {
      return noimage;
    }

    return imagenes.length > 0 ? imagenes[1].url : noimage;
  }
}
