import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-example',
  templateUrl: 'example-library.component.html'
})
export class ExampleLibraryComponent implements OnInit {
  versionNumber = 1

  constructor() {
    console.log('ExampleLibraryComponent created');
  }

  ngOnInit(): void {
    console.log('ExampleLibraryComponent initializing with version', this.versionNumber);
  }

}
