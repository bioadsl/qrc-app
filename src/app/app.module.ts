import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  declarations: [
    AppComponent // Adicione seu componente aqui
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormComponent,
    TableComponent // Certifique-se de importar ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
