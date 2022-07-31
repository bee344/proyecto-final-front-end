import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Persona } from 'src/app/model/persona.model';
import { AboutService } from 'src/app/service/about.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: Persona = new Persona("","");
  about: About[] = [];

  constructor(public personaService: PersonaService, private aboutService: AboutService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    this.aboutService.lista().subscribe(data => {this.about = data});

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
