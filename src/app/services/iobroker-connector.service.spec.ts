import { TestBed } from '@angular/core/testing';

import { IobrokerConnectorService } from './iobroker-connector.service';

describe('IobrokerConnectorService', () => {
  let service: IobrokerConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IobrokerConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
