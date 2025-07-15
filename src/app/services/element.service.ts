import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../models/element.model';

@Injectable({ providedIn: 'root' })
export class ElementService {
  private apiUrl = 'https://periodensystem-server.vercel.app/elements';

  constructor(private http: HttpClient) {}

  getAllElements(filters?: { state?: string; category?: string; name?: string }): Observable<Element[]> {
    let query = '';
    const params: string[] = [];

    if (filters) {
      if (filters.state) params.push(`state=${filters.state}`);
      if (filters.category) params.push(`category=${filters.category}`);
      if (filters.name) params.push(`name=${filters.name}`);
    }

    if (params.length > 0) {
      query = '?' + params.join('&');
    }

    return this.http.get<Element[]>(`https://periodensystem-server.vercel.app/elements${query}`);
  }

  getElementById(id: number): Observable<Element> {
    return this.http.get<Element>(`${this.apiUrl}/${id}`);
  }
}
