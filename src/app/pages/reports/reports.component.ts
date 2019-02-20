import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  downloadPdf(){
    this.reportsService.getDownloadPdf()
    .subscribe(response => this.downLoadFile(response, "application/pdf"));
  }

  donwloadXlsx(){
    this.reportsService.getDownloadXlsx()
    .subscribe(response => this.downloadFileXlsx(response, 
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
  }

  downLoadFile(data: any, type: string) {
    const blob = new Blob([data], { type: type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
  }

  downloadFileXlsx(data: any, type: string) {
    let link = document.createElement('a');
    link.download = 'report.xlsx';
    link.href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' + data;
    link.click();
  }
}
