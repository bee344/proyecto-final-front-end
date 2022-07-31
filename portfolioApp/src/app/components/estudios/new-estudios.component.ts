import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-new-estudios',
  templateUrl: './new-estudios.component.html',
  styleUrls: ['./new-estudios.component.css']
})
export class NewEstudiosComponent implements OnInit {

  nombreS: string = '';
  almaMaterS: string ='';
  fechaS: string ='';
  descripcionS: string = '';

  constructor(private sEstudios: EstudiosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const estu = new Estudios(this.nombreS, this.almaMaterS, this.fechaS, this.descripcionS);
    this.sEstudios.save(estu).subscribe(data=>{
      alert("Estudios agregados correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al agregar nuevos estudios");
      this.router.navigate(['']);
    }
    )
  }

}
