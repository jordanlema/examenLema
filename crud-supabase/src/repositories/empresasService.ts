import { supabase } from '@supabase/supabase-js';
import { Business, CreateBusinessDTO } from '@';

export class BusinessRepository {
  static async getById(id: string): Promise<Business> {
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Business;
  }

  static async getActiveBusinesses(): Promise<Business[]> {
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .eq('subscription_status', 'active');
    if (error) throw error;
    return data as Business[];
  }
}