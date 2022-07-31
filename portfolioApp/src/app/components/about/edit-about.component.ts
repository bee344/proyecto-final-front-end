import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  about: About = null;

  constructor(private sAbout: AboutService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbout.detail(id).subscribe(
      data => {
        alert("Descripcion editada correctamente");
        this.about = data;
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbout.update(id, this.about).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la descripcion");
        this.router.navigate(['']);
      }
    )
  }

}
