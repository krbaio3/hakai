export interface Usuario {
  nombreCompleto: NombreCompleto;
  email: string;
  hobbys?: string [];
}

interface NombreCompleto {
  nombre: string;
  apellido: string;
}
