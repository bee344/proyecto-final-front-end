import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estu: Estudios[] = [];
  
  constructor(private sEstudios: EstudiosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEstudios();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEstudios(): void {
    this.sEstudios.lista().subscribe(
      data => {this.estu = data}
    )
  }

  delete(id?: number) {
    if(id != undefined) {
      this.sEstudios.delete(id).subscribe(
        data => {
          this.cargarEstudios();
        }, err => {
          alert("No se pudieron borrar los estudios");
        }
      )
    }
  }

}
