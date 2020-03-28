import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgainstComponent } from './against.component';

describe('AgainstComponent', () => {
  let component: AgainstComponent;
  let fixture: ComponentFixture<AgainstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgainstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgainstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
