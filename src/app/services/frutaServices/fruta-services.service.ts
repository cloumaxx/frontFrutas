import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateFruta, Fruta, UpdateFruta } from 'src/app/Models/Fruta';
import { FrutaPage } from 'src/app/Models/FrutaPage';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  private baseUrl: string = 'https://backendfrutas.onrender.com/frutas'; 

  constructor(private http: HttpClient) { }


  findAll(page: number = 0, size: number = 10): Observable<FrutaPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<FrutaPage>(`${this.baseUrl}`, { params });
  }

  findByNombre(nombre: string): Observable<Fruta> {
    return this.http.get<Fruta>(`${this.baseUrl}/${nombre}`);
  }

  deleteById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }

  save(createFruta: CreateFruta): Observable<Fruta> {
    return this.http.post<Fruta>(`${this.baseUrl}`, createFruta);
  }

  update(id: string, updateFruta: UpdateFruta): Observable<Fruta> {
    return this.http.put<Fruta>(`${this.baseUrl}/${id}`, updateFruta);
  }
}
