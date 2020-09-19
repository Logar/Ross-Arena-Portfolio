import { 
  Component,
  Directive,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
  ViewEncapsulation, 
  OnInit 
} from '@angular/core';

@Directive({selector: '.slides'})
  class SlidesDirective {}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: [
    './slideshow.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SlideshowComponent implements OnInit {
  
  // Accessing multiple native DOM elements using QueryList
  @ViewChildren(SlidesDirective) slides: QueryList<SlidesDirective>;

  private slideIndex: number;

  public constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.slideIndex = 0;
  }
  
  ngOnInit(): void {}

  private showSlides(): void {
    this.slides.forEach(function(item) {
      this.renderer.setStyle(item, 'display', 'none');
    });
    this.slideIndex++;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    this.renderer.setStyle(this.slides[this.slideIndex - 1], 'display', 'block');
    setTimeout(this.showSlides, 3500); // Change image every 3.5 seconds
  }
}
