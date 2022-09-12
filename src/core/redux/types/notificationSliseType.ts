//?
export interface NotificationResponseData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface NotificationResponseErrors {
  error: Error | null;
}

//? store 
export interface InitialStateNotificationType {
  photo: NotificationResponseData[];
  error: Error | null;
  isLoading: boolean;
}