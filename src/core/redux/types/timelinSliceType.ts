interface SwiperData {
  text: string;
  urlImg: string;
  link: string;
  backgroundColor: string;
}

export interface TimelineCards {
  avatar?: string;
  name: string;
  timeAgo: string;
  photo: string[];
  title: string;
  skills: string[];
  textAbout: string;
}

export interface InitialStateMicroType {
  isAuth: boolean;
  swiperData: SwiperData[];
  timelineCards: TimelineCards[];
  error: Error | null;
}