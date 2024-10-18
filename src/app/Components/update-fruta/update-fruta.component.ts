import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdateFruta } from 'src/app/Models/Fruta';
import { FrutaService } from 'src/app/services/frutaServices/fruta-services.service';

@Component({
  selector: 'app-update-fruta',
  templateUrl: './update-fruta.component.html',
  styleUrl: './update-fruta.component.scss'
})
export class UpdateFrutaComponent {
  @Input() fruta: UpdateFruta | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<UpdateFruta>();
  
  constructor(private frutaService: FrutaService) {}

   guardar() {
    if (this.fruta) {
      this.save.emit(this.fruta);
    }
  }

  cancelar() {
    this.close.emit();
  }
}
