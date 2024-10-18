import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFrutaComponent } from './create-fruta.component';

describe('CreateFrutaComponent', () => {
  let component: CreateFrutaComponent;
  let fixture: ComponentFixture<CreateFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFrutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
