import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Concert } from './concert';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
apiUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

getConcerts(): Observable<Concert[]>{
return this.http.get<Concert[]>(this.apiUrl);
}
}
