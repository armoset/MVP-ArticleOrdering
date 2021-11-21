import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikeldialogComponent } from './artikeldialog.component';

describe('ArtikeldialogComponent', () => {
  let component: ArtikeldialogComponent;
  let fixture: ComponentFixture<ArtikeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
