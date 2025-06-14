export interface empresas {
  id: string;
  name: string;
  description: string;
  category: string;
  averageRating: number;
  totalReviews: number;
  queueSettings: {
    estimatedWaitTime: string;
    maxQueueSize: number;
    notificationTypes: string[];
  };
  subscriptionStatus: string;
  createdAt: string;
  updatedAt: string;
}