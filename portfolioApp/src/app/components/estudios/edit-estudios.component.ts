import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
  estu: Estudios = null;

  constructor(private sEstudios: EstudiosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.detail(id).subscribe(
      data => {
        this.estu = data;
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.update(id, this.estu).subscribe(
      data => {
        alert("Estudios modificados correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar los estudios");
        this.router.navigate(['']);
      }
    )

  }

}
