import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CreateFruta, Fruta } from 'src/app/Models/Fruta';
import { FrutaService } from 'src/app/services/frutaServices/fruta-services.service';

@Component({
  selector: 'app-create-fruta',
  
  templateUrl: './create-fruta.component.html',
  styleUrl: './create-fruta.component.scss'
})
export class CreateFrutaComponent {
  @Output() close = new EventEmitter<void>();
  fruta: CreateFruta = {
    nombre: '',
    precio: 0
  };

  constructor(
    private frutaService: FrutaService,
    private messageService: MessageService 
  ) {}

  guardarFruta() {
    this.frutaService.save(this.fruta).subscribe({
      next: (response: Fruta) => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Fruta creada correctamente' });
        this.close.emit();      },
      error: (error) => {
        console.error('Error al crear la fruta:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear la fruta' });

      }
    });
  }

  cancelar() {
    this.fruta = { nombre: '', precio: 0 };
    this.close.emit();
  }
}
