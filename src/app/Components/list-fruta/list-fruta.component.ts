import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Fruta } from 'src/app/Models/Fruta';
import { FrutaService } from 'src/app/services/frutaServices/fruta-services.service';
@Component({
  selector: 'app-list-fruta',
  templateUrl: './list-fruta.component.html',
  styleUrl: './list-fruta.component.scss',
  providers:[
    FrutaService 
  ]
})
export class ListFrutaComponent {
  frutas: Fruta[] = []; 
  frutasFiltradas: Fruta[] = []; 
  nombreFruta: string = ''; 
  frutaSeleccionada: Fruta = null;
  loading: boolean = true; 

  constructor(
    private frutaService: FrutaService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cargarFrutas(); 
  }
  /*
    Datos para la paginacion 
  */
    totalRecords: number = 0;
    page: number = 0;
    size: number = 5;
  cargarFrutas(page: number = 0, size: number = this.size) {
    this.loading = true;
    this.frutaService.findAll(page, size).subscribe((data) => {
      this.frutas = data.content; // Guardar las frutas en el arreglo original
      this.frutasFiltradas = [...this.frutas]; // Inicializar las frutas filtradas
      this.totalRecords = data.totalElements;
      this.loading = false; 
    });
  }
  onPageChange(event: any) {
    this.page = event.first / event.rows;
    this.size = event.rows;
    this.cargarFrutas(this.page, this.size);
  }

  editarFruta(fruta: Fruta) {
    this.frutaSeleccionada = fruta ;
    this.visibleEditar = true;
  }

  eliminarFruta(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta fruta?')) {
      this.frutaService.deleteById(id).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Fruta eliminada correctamente' });
          this.cargarFrutas();
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar la fruta' });
          console.error('Error al eliminar la fruta:', error);
        }
      });
    }
  }

  filtrarFrutas() {
    if (this.nombreFruta.trim()) {
      this.frutasFiltradas = this.frutas.filter(fruta =>
        fruta.nombre.toLowerCase().includes(this.nombreFruta.toLowerCase())
      );
    } else {
      // Resetear a todas las frutas si el campo está vacío
      this.frutasFiltradas = [...this.frutas]; 
    }
  }
  /*
      Manejo de dialogs
  */
  visibleCrear: boolean = false;
  visibleEditar: boolean = false;
  dialogCrear() {
    this.visibleCrear = true;
  }

  cerrarDialogo() {
    this.visibleCrear = false;
    this.cargarFrutas(); 
  }
  cerrarDialogoEdicion() {
    this.visibleEditar = false;
    this.frutaSeleccionada = null;
  }
  guardarCambios(frutaEditada: Fruta) {
    if (frutaEditada && this.frutaSeleccionada) {
      this.frutaService.update(this.frutaSeleccionada.id, frutaEditada).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Fruta actualizada correctamente' });
          this.cerrarDialogoEdicion();
          this.cargarFrutas(this.page, this.size); 
        },
        error: (error) => {
          console.error('Error al actualizar la fruta:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar la fruta' });

        }
      });
    }
  }
}
