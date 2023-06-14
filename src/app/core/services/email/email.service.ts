import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  enviarEmail(remetente: string, assunto: string, mensagem: string): Observable<any> {
    const email = { remetente, assunto, mensagem };
    return this.http.post('/api/enviar-email', email);
  }
}
