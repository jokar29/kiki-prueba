export interface Rate {
    id_envio: number;
    destinatario: string;
    remitente: string;
    contenido: string;
    fecha_envio: Date;
    distancia: number;
    tarifa: number;
  }