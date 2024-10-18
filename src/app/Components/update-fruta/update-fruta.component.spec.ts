import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFrutaComponent } from './update-fruta.component';

describe('UpdateFrutaComponent', () => {
  let component: UpdateFrutaComponent;
  let fixture: ComponentFixture<UpdateFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFrutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
