import type { Ticket } from './Ticket';
import type { configuredN } from './configuracionN';
import type { empresas } from './empresas';
import type { reseñas } from './reseñas';

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
    },
    {
      id: 'T101',
      table_number: 'B05',
      party_size: 2,
      status: 'READY',
      estimated_wait_time: '00:05:00',
      position_in_queue: 1,
      created_at: '2024-03-20T10:30:00Z'
    },
    {
      id: 'T102',
      party_size: 6,
      status: 'TERMINATED',
      estimated_wait_time: '00:25:00',
      created_at: '2024-03-20T09:45:00Z'
    }
  ],

  notificationPreferences: [
    {
      turnApproaching: true,
      turnReady: true,
      notificationSound: 'chime',
      vibrationEnabled: true,
      pushNotifications: true,
      smsNotifications: false,
      emailNotifications: true
    }
  ],

  businesses: [
    {
      id: 'B001',
      name: 'The Cozy Corner Cafe',
      description: 'Acogedor café con especialidades en pastelería artesanal y café de origen.',
      category: 'restaurant',
      averageRating: 4.5,
      totalReviews: 128,
      queueSettings: {
        estimatedWaitTime: '00:20:00',
        maxQueueSize: 15,
        notificationTypes: ['approaching', 'ready', 'update']
      },
      subscriptionStatus: 'active',
      createdAt: '2023-01-15T00:00:00Z',
      updatedAt: '2024-03-15T00:00:00Z'
    }
  ],

  reviews: [
    {
      id: 'R001',
      businessId: 'B001',
      userId: 'U100',
      rating: 5,
      comment: 'Excelente sistema de fila virtual, las notificaciones son muy precisas.',
      queueExperience: {
        waitTimeAccuracy: 5,
        notificationQuality: 5
      },
      createdAt: '2024-02-10T14:30:00Z'
    }
  ]
};

// Contadores para IDs
export let nextTicketId = 103;
export let nextBusinessId = 2;
export let nextReviewId = 2;

export function getNextTicketId(): string {
  return `T${nextTicketId++}`;
}