import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosProfileComponent } from './cursos-profile.component';

describe('CursosProfileComponent', () => {
  let component: CursosProfileComponent;
  let fixture: ComponentFixture<CursosProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
