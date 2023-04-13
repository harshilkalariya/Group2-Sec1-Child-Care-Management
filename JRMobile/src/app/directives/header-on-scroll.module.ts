import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderOnScrollDirective } from './header-on-scroll.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderOnScrollDirective
    ],
    exports: [
        HeaderOnScrollDirective
    ]
})

export class HeaderOnScroll { }