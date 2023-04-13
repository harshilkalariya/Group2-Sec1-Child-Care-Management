import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHeaderOnScroll]'
})
export class HeaderOnScrollDirective {

  @Input('appHeaderOnScroll') header: any;
  private headerHeight = 44;

  constructor(
    private domControl: DomController,
    private renderer: Renderer2
  ) { }


  ngOnInit() {
    this.header = this.header.el;
    this.domControl.read(() => {
      this.headerHeight = this.header.clientHeight;
    })
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    let scrollTop = $event.detail.scrollTop;
    this.domControl.write(() => {
      if (scrollTop > 0) {
        this.renderer.setStyle(this.header, 'box-shadow', '0 1px 3px 0 rgba(var(--darkRGB), 0.1)')
      }

      if (scrollTop <= 0) {
        this.renderer.setStyle(this.header, 'box-shadow', 'none')
      }

    })

  }
}
