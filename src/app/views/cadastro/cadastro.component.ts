import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { ServiceUtils } from '../../../utils/service.utils';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {

  this.formulario = this.formBuilder.group({

  nome: ['', [Validators.required, Validators.nullValidator]],
  email: ['', [Validators.required, Validators.nullValidator]],
  senha: ['', [Validators.required, Validators.nullValidator]],
  repSenha: ['', [Validators.required, Validators.nullValidator]]

});

console.log(this.formulario.value);

  }

  formChanged() {
    console.log('Changed To: ', this.formulario);
  }

  onSubmit() {

    console.log(this.formulario.value);

    if (this.formulario.controls.senha.value === this.formulario.controls.repSenha.value) {

    const cliente = {
      nome: this.formulario.controls.nome.value,
      usuario: {
        email: this.formulario.controls.email.value,
        senha: this.formulario.controls.senha.value
      }
    };

    this.http.post(ServiceUtils.DEFAULT_API_PATH + '/p/cliente/novo', cliente)
    .map(res => res)
    .subscribe(dados => console.log(dados));
    }

  }


}
