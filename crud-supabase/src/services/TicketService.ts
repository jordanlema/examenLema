import { TicketRepository } from '@supabase/supabase-js';
import { Ticket, CreateTicketDTO } from '@/models/Ticket';

export class TicketService {
  static async createNewTicket(ticketData: CreateTicketDTO): Promise<Ticket> {
    // Validación adicional
    if (ticketData.party_size <= 0) {
      throw new Error('Party size must be positive');
    }
    return TicketRepository.create(ticketData);
  }

  static async getQueuePosition(ticketId: string): Promise<number> {
    const tickets = await TicketRepository.getAll();
    const ticket = tickets.find(t => t.id === ticketId);
    return ticket?.position_in_queue || -1;
  }
}