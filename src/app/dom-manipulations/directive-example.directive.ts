import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExampleDirective {
  private element = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('pink');
  }
  @HostListener('onSelect') onSelect(){
    this.highlight('green')
  }

  private highlight(color: string | null) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
