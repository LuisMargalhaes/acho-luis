import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

import { EditCourseComponent } from './edit-course/edit-course.component'; // Importe seu componente de edição

@NgModule({
  declarations: [
    EditCourseComponent  // Declare o componente que você vai usar
  ],
  imports: [
    BrowserModule,
    FormsModule  // Inclua FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: []  // Não é necessário definir nenhum componente se não estiver usando o AppComponent
})
export class AppModule { }
