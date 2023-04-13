import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize20]'
})
export class FontSize20Directive {

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { 
    this.renderer.setStyle(elementRef.nativeElement,'font-size','20px')
  }

}
