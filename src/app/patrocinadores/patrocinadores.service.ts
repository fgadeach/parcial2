import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patrocinador } from './patrocinadores';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {
apiUrl = "https://gist.githubusercontent.com/CesarF/24a0d07afa64532a0ee72b32f554ed8f/raw/bfa19d16b5ecc64c8d9f16a062baac8841c0ef80/sponsors.json";

constructor(private http: HttpClient) { }

getPatrocinadores(): Observable<Patrocinador[]>{
return this.http.get<Patrocinador[]>(this.apiUrl);
}
}
