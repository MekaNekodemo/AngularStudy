import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceDropdownComponent } from './multi-choice-dropdown.component';

describe('MultiChoiceDropdownComponent', () => {
  let component: MultiChoiceDropdownComponent;
  let fixture: ComponentFixture<MultiChoiceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiChoiceDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiChoiceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
