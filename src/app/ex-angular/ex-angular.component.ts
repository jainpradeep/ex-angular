import { Input, ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import * as jexcel from 'jexcel';
@Component({
  selector: 'ex-angular',
  templateUrl: './ex-angular.component.html',
  styleUrls: ['./ex-angular.component.css']
})
export class ExAngularComponent implements AfterViewInit {
  title = 'Angular Elements';
  @Input() name: string;
  @Input() surname: string;
  data = [
    ['Prj1', 'ERPL', '2019-02-12', '', true, '2.000,00'],
    ['Prj2', 'SRPL', '2018-07-11', '', true, '4.000,01'],
];
constructor() { }


ngAfterViewInit() {
  jexcel(document.getElementById('spreadsheet'), {
    data: this.data,
    columns: [
        { type: 'text', title: 'Project', width: 120 },
        { type: 'dropdown', title: 'Select', width: 200, source: [ 'S1', 'S2', 'S3' ] },
        { type: 'calendar', title: 'Available', width: 200 },
        { type: 'image', title: 'img', width: 120 },
        { type: 'checkbox', title: 'Check', width: 80 },
        { type: 'numeric', title: 'Cost', width: 100, decimal: ',' },
      ]
});
}

}
