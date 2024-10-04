import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.userForm = this.fb.group({
      tituloEleitor: ['', Validators.required],
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      mae: ['', Validators.required],
      pai: ['', Validators.required],
      nascimento: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser = new User(
        this.userForm.value.tituloEleitor,
        this.userForm.value.cpf,
        this.userForm.value.nome,
        this.userForm.value.mae,
        this.userForm.value.pai,
        new Date(this.userForm.value.nascimento)
      );
      this.dataService.addUser(newUser);
      this.userForm.reset();
    }
  }
}