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
    .subscribe(response => this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type});
    var url = window.URL.createObjectURL(blob);
    var pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
  }
}
