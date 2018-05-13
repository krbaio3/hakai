import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
})
export class ResaltarDirective {
  constructor(private el: ElementRef) {
    console.log('Directiva working!');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltar')
  nuevoColor: string;

  @HostListener('mouseenter')
  mouseEnter() {
    this.resaltar(this.nuevoColor);
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.resaltar(null);
  }

  private resaltar (color: string = 'yellow') {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
