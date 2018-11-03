import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleImageComponent } from './multiple-image.component';

describe('MultipleImageComponent', () => {
  let component: MultipleImageComponent;
  let fixture: ComponentFixture<MultipleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
