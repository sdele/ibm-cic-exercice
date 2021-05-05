import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from '../directives/hover.directive';


// SharedModule permet de déclarer des éléments communs dont j'ai besoin dans plusieurs autres features modules
// Ici on déclare notre HoverDirective et on l'exporte pour pouvoir l'utiliser dans les modules qui vont
// importer SharedModule

@NgModule({
  declarations: [HoverDirective],
  imports: [
    CommonModule
  ],
  exports: [HoverDirective]
})
export class SharedModule { }
