import { supabase } from '@supabase/supabase-js';
import { Ticket, CreateTicketDTO, UpdateTicketDTO } from '@/models/Ticket';

export class TicketRepository {
  static async getAll(): Promise<Ticket[]> {
    const { data, error } = await supabase.from('tickets').select('*');
    if (error) throw error;
    return data as Ticket[];
  }

  static async create(ticket: CreateTicketDTO): Promise<Ticket> {
    const { data, error } = await supabase
      .from('tickets')
      .insert(ticket)
      .select()
      .single();
    if (error) throw error;
    return data as Ticket;
  }

  static async update(id: string, updates: UpdateTicketDTO): Promise<Ticket> {
    const { data, error } = await supabase
      .from('tickets')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Ticket;
  }
}