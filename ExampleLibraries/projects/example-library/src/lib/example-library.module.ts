import { NgModule } from '@angular/core';
import { ExampleLibraryComponent } from './example-library.component';



@NgModule({
  declarations: [
    ExampleLibraryComponent
  ],
  imports: [
  ],
  exports: [
    ExampleLibraryComponent
  ]
})
export class ExampleLibraryModule {
  constructor() {
    console.log('ExampleLibraryModule created');
  }
}
