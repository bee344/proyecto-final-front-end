import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skillURL = 'https://shielded-brushlands-02690.herokuapp.com/skills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skillURL + 'lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillURL + `detail/${id}`);
  }

  public save(skill: Skills): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'crear', skill);
  }

  public update(id: number, skill: Skills): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `actualizar/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
}
