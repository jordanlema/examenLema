import { BusinessRepository } from '@/repositories/BusinessRepository';
import { Business } from '@/models/Business';

export class BusinessService {
  static async getFeaturedBusinesses(): Promise<Business[]> {
    const businesses = await BusinessRepository.getActiveBusinesses();
    return businesses.sort((a, b) => 
      parseInt(a.queue_settings.estimated_wait_time) - 
      parseInt(b.queue_settings.estimated_wait_time)
    );
  }

  static async getBusinessDetails(id: string): Promise<Business> {
    return BusinessRepository.getById(id);
  }
}