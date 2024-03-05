import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from 'src/app/pensamentos/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    return `pensamento-${this.pensamento.conteudo.length >= 256 ? 'g' : 'p'}`;
  }

  excluir() {
    this.router.navigate([`pensamentos/excluirPensamentos/${this.pensamento.id}`])
  }

  editar(){
    this.router.navigate([`pensamentos/editarPensamentos/${this.pensamento.id}`]);
  }

}
