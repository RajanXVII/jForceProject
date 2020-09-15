import { TestBed, inject } from '@angular/core/testing';

import { HotelRoomService } from './hotel-room.service';

describe('HotelRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelRoomService]
    });
  });

  it('should be created', inject([HotelRoomService], (service: HotelRoomService) => {
    expect(service).toBeTruthy();
  }));
});
