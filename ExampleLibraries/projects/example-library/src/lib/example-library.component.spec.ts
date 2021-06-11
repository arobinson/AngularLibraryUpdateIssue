import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLibraryComponent } from './example-library.component';

describe('ExampleLibraryComponent', () => {
  let component: ExampleLibraryComponent;
  let fixture: ComponentFixture<ExampleLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
