import { TestBed, inject } from '@angular/core/testing';

import { SearchRoomService } from './search-room.service';

describe('SearchRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRoomService]
    });
  });

  it('should be created', inject([SearchRoomService], (service: SearchRoomService) => {
    expect(service).toBeTruthy();
  }));
});
