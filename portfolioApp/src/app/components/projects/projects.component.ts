import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proy: Projects[] = [];

  constructor(private sProjects: ProjectsService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.sProjects.lista().subscribe(
      data => { this.proy = data }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sProjects.delete(id).subscribe(
        data => {
          this.cargarProyecto;
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
