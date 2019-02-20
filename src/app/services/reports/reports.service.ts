import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportsService {

  constructor(private http: HttpClient) { }

  getDownloadPdf(): Observable<any>{
    return this.http.get(`report/downloadPdf.pdf`, {responseType: 'arraybuffer'});
  }

  getDownloadXlsx(): Observable<any>{
    return this.http.get(`report/downloadXlsx.xlsx`, {responseType: 'blob'});
  }

}
