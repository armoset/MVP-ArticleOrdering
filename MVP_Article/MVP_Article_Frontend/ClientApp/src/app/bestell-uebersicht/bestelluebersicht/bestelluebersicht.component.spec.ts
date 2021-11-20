import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestelluebersichtComponent } from './bestelluebersicht.component';

describe('BestelluebersichtComponent', () => {
  let component: BestelluebersichtComponent;
  let fixture: ComponentFixture<BestelluebersichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestelluebersichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestelluebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
