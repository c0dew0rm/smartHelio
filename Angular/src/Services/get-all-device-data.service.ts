import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllDeviceDataService {

  constructor(private http: HttpClient ,) { }

  getAllData() {
    return this.http.get<any>('http://localhost:4040/api/getAllDevice');
  }

  getDeviceData(id,startDateEpoch,endDateEpoch) {
    const body={
      sensorId:id,
      startDate:startDateEpoch,
      endDate:endDateEpoch
    }
    return this.http.post('http://localhost:4040/api/getData',  body);
  }

}
