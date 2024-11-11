import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  course = {
    name: '',
    complement: '',
    description: '',
    days: '',
    hours: '',
    cep: '',
    state: '',
    city: '',
    district: '',
    street: '',
    number: '',
    email: '',
    phone: '',
    additionalInfo: ''
  };

  onSubmit() {
    console.log('Dados salvos:', this.course);
    alert('Dados salvos com sucesso!');
  }
}
