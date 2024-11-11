import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import { ProfileComponent } from './profile/profile.component';
import { ProfileEmpresaComponent } from "./profile-empresa/profile-empresa.component";
import { CursosProfileComponent } from './cursos-profile/cursos-profile.component';
import { FormsModule } from '@angular/forms';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, ProfileEmpresaComponent, CursosProfileComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ACHO';
}
