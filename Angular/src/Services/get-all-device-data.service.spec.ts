import { TestBed } from '@angular/core/testing';

import { GetAllDeviceDataService } from './get-all-device-data.service';

describe('GetAllDeviceDataService', () => {
  let service: GetAllDeviceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDeviceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
