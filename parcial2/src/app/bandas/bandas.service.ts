import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bandas } from './bandas';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class BandasService {
  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getBandasList(): Observable<Bandas[]> {
  return this.http.get<Bandas[]>(this.apiUrl);
}

}
