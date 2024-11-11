import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  // Variáveis para armazenar as informações do curso
  courseName: string = '';
  institution: string = '';
  description: string = '';
  imageUrl: string = '';

  // Função que será chamada ao salvar os dados
  saveChanges() {
    console.log('Nome do Curso:', this.courseName);
    console.log('Instituição:', this.institution);
    console.log('Descrição:', this.description);
    console.log('Imagem URL:', this.imageUrl);

    // Aqui você pode adicionar a lógica para salvar ou enviar os dados
  }
}
