import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  proyURL = 'http://localhost:8080/proyectos/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.proyURL + 'lista');
  }

  public detail(id: number): Observable<Projects> {
    return this.httpClient.get<Projects>(this.proyURL + `detail/${id}`);
  }

  public save(projects: Projects): Observable<any> {
    return this.httpClient.post<any>(this.proyURL + 'crear', projects);
  }

  public update(id: number, projects: Projects): Observable<any> {
    return this.httpClient.put<any>(this.proyURL + `actualizar/${id}`, projects);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyURL + `delete/${id}`);
  }
}
