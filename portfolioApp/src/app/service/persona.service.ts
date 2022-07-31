import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://shielded-brushlands-02690.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL+'traer/perfil');
  }
  
  
}
