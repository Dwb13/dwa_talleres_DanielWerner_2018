import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokegridComponent } from './pokegrid.component';

describe('PokegridComponent', () => {
  let component: PokegridComponent;
  let fixture: ComponentFixture<PokegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
