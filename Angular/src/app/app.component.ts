import { Component } from '@angular/core';
import {GetAllDeviceDataService} from '../Services/get-all-device-data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectionOption=[];
  id;
  showGraph=false;

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Current' },
    { data: [], label: 'Voltage' },
    { data: [], label: 'Power' },
  ];
  public lineChartLabels: Label[] = [];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private getData:GetAllDeviceDataService) { }

  ngOnInit(){ 
    this.getData.getAllData().subscribe(res =>{
      for(const i in res) {
        this.selectionOption.push(res[i]['sensorId']);
      }
    });
  }

  onSelection(event) {
    this.id=event
  }

  GetData() {
    const startTs=(<HTMLInputElement>document.getElementById("startDate")).value;
    const endTs=(<HTMLInputElement>document.getElementById("endDate")).value;
    const startDateEpoch = Math.floor((new Date(startTs).getTime())/1000);
    const endDateEpoch = Math.floor((new Date(endTs).getTime())/1000);
    this.getData.getDeviceData(this.id,startDateEpoch,endDateEpoch).subscribe((res)=> {
      for(const i in res) {
        this.lineChartData[0]['data'].push(res[i]['Current']);
        this.lineChartData[1]['data'].push(res[i]['Voltage']);
        this.lineChartData[2]['data'].push(res[i]['Power']);
        const timestamp=new Date(res[i]['timeStamp']*1000);
        this.lineChartLabels.push(timestamp.toISOString());
        this.showGraph=true;
      }
    })
  }

}
