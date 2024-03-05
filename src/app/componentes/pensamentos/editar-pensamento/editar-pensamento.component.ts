import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento = { conteudo: '', autoria: '', modelo: '' }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }
  }

  public salvarAlteracoes() {
    if (this.pensamento.modelo !== '') {
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      });
    }
  }

  public getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
