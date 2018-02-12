import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[activeRoute]'
})
export class ActiveRouteDirective {

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) { 
    this.elementRef.nativeElement.className = this.elementRef.nativeElement.className.replace('active', ''); 
  }

  @HostListener('click') click() {
    let elements = document.querySelectorAll('[activeRoute]');
    for (var i=0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + ' active'; 
  } 

}
