import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/pensamentos/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cria-pensamento',
  templateUrl: './cria-pensamento.component.html',
  styleUrls: ['./cria-pensamento.component.css']
})
export class CriaPensamentoComponent implements OnInit {

  pensamento: Pensamento = { conteudo: '', autoria: '', modelo: 'modelo1' };

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }


  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
