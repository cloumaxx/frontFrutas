export interface Fruta {
  id: string;
  nombre: string;
  precio: number;
  fechaCreacion: string;
  fechaModificacion: string;
}

export interface CreateFruta {
  nombre: string;
  precio: number;
}
export interface UpdateFruta {
  nombre: string;
  precio: number;
}