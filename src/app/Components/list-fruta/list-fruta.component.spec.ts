import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFrutaComponent } from './list-fruta.component';

describe('ListFrutaComponent', () => {
  let component: ListFrutaComponent;
  let fixture: ComponentFixture<ListFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFrutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
