import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
 
  private apiUrl = enviroment.API_URL;
  constructor(private http: HttpClient) { }
  
  getAccount(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
