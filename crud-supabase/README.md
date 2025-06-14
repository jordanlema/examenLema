# Sistema de Gestión de Colas para Cafeterías

## Estructura del Proyecto
src/
├── types/
│ ├── Ticket.ts
│ ├── configurationN.ts
│ ├── empresas.ts
│ ├── reseñas.ts
│ └── database.ts
└── ...


## Interfaces Principales

### 1. Ticket (`Ticket.ts`)

```typescript
export interface Ticket {
  id: string;
  table_number?: string;
  party_size: number;
  status: 'PENDING' | 'READY' | 'TERMINATED';
  estimated_wait_time: string;
  position_in_queue?: number;
  created_at: string;
}
Justificación:
Representa los tickets de espera en el sistema, con:

table_number: Identificador de mesa (opcional hasta asignación)

status: Estados posibles del flujo de atención

estimated_wait_time: Tiempo calculado en formato HH:MM:SS

Snake_case para compatibilidad con Supabase

2. Configuración de Notificaciones (configurationN.ts)
typescript
export interface configuredN {
  turnApproaching: boolean;
  turnReady: boolean;
  notificationSound: 'default' | 'chime' | 'alert';
  vibrationEnabled: boolean;
  pushNotifications: boolean;
}
Justificación:
Controla las preferencias de notificación con:

Alertas para turno próximo y listo

Personalización de sonidos y vibración

Opt-in para diferentes canales

3. Empresa (empresas.ts)
typescript
export interface empresas {
  id: string;
  name: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  queueSettings: {
    max_queue_size: number;
    avg_wait_time: string;
  };
}
Justificación:
Modela negocios suscritos al servicio con:

Estado de suscripción

Configuración específica de colas

Métricas de operación

4. Reseñas (reseñas.ts)
typescript
export interface reseñas {
  id: string;
  businessId: string;
  rating: number; // 1-5
  queueExperience: {
    wait_time_accuracy: number;
    notification_quality: number;
  };
}
Justificación:
Captura feedback de usuarios sobre:

Precisión de tiempos de espera

Calidad del sistema de notificaciones

Relación con negocios mediante businessId

Estructura JSON Global (database.ts)
typescript
export interface JsonDatabase {
  tickets: Ticket[];
  notificationPreferences: configuredN[];
  businesses: empresas[];
  reviews: reseñas[];
}

export const database: JsonDatabase = {
  tickets: [
    {
      id: 'T100',
      table_number: 'A12',
      party_size: 4,
      status: 'PENDING',
      estimated_wait_time: '00:15:30',
      position_in_queue: 3,
      created_at: '2024-03-20T10:15:00Z'
    }
    // ... más tickets
  ],
  // ... otras entidades
};
Características clave:

Datos iniciales coherentes para desarrollo

Relaciones entre entidades mediante IDs

Formato de fechas ISO 8601

IDs generados automáticamente

Justificación del Diseño
Consistencia con Supabase:

Uso de snake_case en todos los campos

Tipos alineados con estructura de BD real

Experiencia de Usuario:

Notificaciones configurables

Transparencia en tiempos de espera

Extensibilidad:

Sistema de reseñas para mejora continua

Múltiples estados en el flujo de tickets

Validación de Datos:

Enums para valores discretos

Tipos estrictos para fechas y horas

Ejemplo de Uso
typescript
// Obtener todos los tickets pendientes
const pendingTickets = database.tickets.filter(
  t => t.status === 'PENDING'
);

// Agregar nueva reseña
database.reviews.push({
  id: `R${nextReviewId++}`,
  businessId: 'B001',
  rating: 5,
  queueExperience: {
    wait_time_accuracy: 5,
    notification_quality: 5
  }
});