import { Injectable } from '@angular/core';
import { Mahasiswa } from './models/mahasiswa.model';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HikariService {
  private mahasiswaUrl = 'https://api.myjson.com/bins/cho2m';
  mhs: Mahasiswa[] = [
    { nim: "11", nama: 'Mr. Hikaru',alamat:"cirebon", ttl:new Date() },
    { nim: "15", nama: 'Hikari',alamat:"Bandung", ttl:new Date() },
  ];
  
  constructor(private http: HttpClient) { }


  getMahasiswa():Observable<Mahasiswa[]>{
    return this.http.get<Mahasiswa[]>(this.mahasiswaUrl);
  }
  getMahasiswaById(id:number):Observable<Mahasiswa[]>{
    let url = `${this.mahasiswaUrl}`;
    return this.http.get<Mahasiswa[]>(url);
  }
}

