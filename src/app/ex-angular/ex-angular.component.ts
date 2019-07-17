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
    ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
    ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
];
constructor() { }


ngAfterViewInit() {
  jexcel(document.getElementById('spreadsheet'), {
    data: this.data,
    columns: [
        { type: 'text', title: 'Car', width: 120 },
        { type: 'dropdown', title: 'Make', width: 200, source: [ 'Alfa Romeo', 'Audi', 'Bmw' ] },
        { type: 'calendar', title: 'Available', width: 200 },
        { type: 'image', title: 'Photo', width: 120 },
        { type: 'checkbox', title: 'Stock', width: 80 },
        { type: 'numeric', title: 'Price', width: 100, mask: '$ #.##,00', decimal: ',' },
        { type: 'color', width: 100, render: 'square', }
     ]
});
}

}
