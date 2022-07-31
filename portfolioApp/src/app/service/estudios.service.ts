import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  expURL = 'http://localhost:8080/estudios/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Estudios> {
    return this.httpClient.get<Estudios>(this.expURL + `detail/${id}`);
  }

  public save(estudios: Estudios): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'crear', estudios);
  }

  public update(id: number, estudios:Estudios): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `actualizar/${id}`, estudios);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
