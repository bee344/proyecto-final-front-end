import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {

  nombreP: string = '';
  descripcionP: string = '';

  constructor(private sProjects: ProjectsService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const proy = new Projects(this.nombreP, this.descripcionP);
    this.sProjects.save(proy).subscribe(data => {
      alert("Proyecto agregado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
