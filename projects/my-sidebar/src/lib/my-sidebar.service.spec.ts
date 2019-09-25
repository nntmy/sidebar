import { TestBed } from '@angular/core/testing';

import { MySidebarService } from './my-sidebar.service';

describe('MySidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySidebarService = TestBed.get(MySidebarService);
    expect(service).toBeTruthy();
  });
});
