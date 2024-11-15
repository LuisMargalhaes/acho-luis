import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmpresaComponent } from './profile-empresa.component';

describe('ProfileEmpresaComponent', () => {
  let component: ProfileEmpresaComponent;
  let fixture: ComponentFixture<ProfileEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
