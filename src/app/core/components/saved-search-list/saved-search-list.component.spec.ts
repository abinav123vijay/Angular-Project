import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSearchListComponent } from './saved-search-list.component';

describe('SavedSearchListComponent', () => {
  let component: SavedSearchListComponent;
  let fixture: ComponentFixture<SavedSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedSearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
