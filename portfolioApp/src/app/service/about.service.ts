import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  aboutURL = 'http://localhost:8080/about/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<About[]> {
    return this.httpClient.get<About[]>(this.aboutURL + 'lista');
  }

  public detail(id: number): Observable<About> {
    return this.httpClient.get<About>(this.aboutURL + `detail/${id}`);
  }

  public save(about: About): Observable<any> {
    return this.httpClient.post<any>(this.aboutURL + 'crear', about);
  }

  public update(id: number, about:About): Observable<any> {
    return this.httpClient.put<any>(this.aboutURL + `actualizar/${id}`, about);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.aboutURL + `delete/${id}`);
  }
}
