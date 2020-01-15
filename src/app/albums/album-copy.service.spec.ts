import { TestBed } from '@angular/core/testing';

import { AlbumCopyService } from './album-copy.service';

describe('AlbumCopyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumCopyService = TestBed.get(AlbumCopyService);
    expect(service).toBeTruthy();
  });
});
