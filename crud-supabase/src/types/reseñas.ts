export interface reseñas {
  id: string;
  businessId: string;
  userId: string;
  rating: number;
  comment?: string;
  queueExperience: {
    waitTimeAccuracy: number;
    notificationQuality: number;
  };
  createdAt: string;
}