import { createSlice } from '@reduxjs/toolkit';
import testImg4 from '../../assets/images/16160153541.webp';
import testImg5 from '../../assets/images/16160153782.webp';
import testImg6 from '../../assets/images/161602365020.webp';
import testImg2 from '../../assets/images/161602370523.webp';
import testImg3 from '../../assets/images/161602375626.webp';
import calendar from '../../assets/images/kalendar.png';
import news from '../../assets/images/news.png';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import photoSkill_1 from '../../assets/images/photoSkill_1.webp';
import photoSkill_2 from '../../assets/images/photoSkill_2.png';
import photoSkill_3 from '../../assets/images/photoSkill_3.png';
import smiley from '../../assets/images/smiley.png';
import testImg from '../../assets/images/testImg.webp';
import testImg1 from '../../assets/images/testImg1.webp';
import { InitialStateMicroType } from '../../core/redux/types/timelinSliceType';

const timelineCardsData = [
  {
    avatar: people1,
    name: 'М111ария Басманова',
    timeAgo: '12 мин. назад',
    photo: [],
    title: 'Гитарист в группу',
    skills: ['Гитара', 'Скрипка'],
    textAbout: 'Описание в две три строки, что нужно делать, кто еще в группе',
  },
  {
    avatar: '',
    name: 'Константин Иванов',
    timeAgo: '2 часа назад',
    photo: [],
    title: 'Вокалист в караоке',
    skills: ['Гитара', 'Скрипка'],
    textAbout: 'Описание в две три строки, что нужно делать, кто еще в группе',
  },
  {
    avatar: people2,
    name: 'Репетиционная база ЭРТВ-1',
    timeAgo: '12 мин. назад',
    photo: [
      photoSkill_1,
      testImg1,
      photoSkill_2,
      testImg,
      testImg3,
      photoSkill_3,
      testImg2,
    ],
    title: 'Шесть площадок',
    skills: ['Гитара', 'Скрипка'],
    textAbout: 'Описание в две три строки, что нужно делать, кто еще в группе',
  },
  {
    avatar: '',
    name: 'Репетиционная база ЭРТВ-2',
    timeAgo: '38 мин. назад',
    photo: [
      photoSkill_1,
      testImg3,
      testImg4,
      testImg1,
      photoSkill_2,
      testImg,
      testImg5,
      photoSkill_3,
      testImg6,
      testImg2,
    ],
    title: 'Шесть площадок',
    skills: ['Гитара', 'Скрипка'],
    textAbout: 'Описание в две три строки, что нужно делать, кто еще в группе',
  },
];

const swiperData = [
  {
    text: 'Актуальная новость',
    urlImg: news,
    link: '/',
    backgroundColor: '#B3EEE6',
  },
  {
    text: 'Актуальная новость2',
    urlImg: smiley,
    link: '/user',
    backgroundColor: '#FFDED0',
  },
  {
    text: 'Актуальная новость3',
    urlImg: calendar,
    link: '/user',
    backgroundColor: '#D0CBF9',
  },
  {
    text: 'Актуальная новость4',
    urlImg: smiley,
    link: '/user',
    backgroundColor: '#B3EEE6',
  },
  {
    text: 'Актуальная новость5',
    urlImg: news,
    link: '/chats',
    backgroundColor: '#D0CBF9',
  },
];

const initialState: InitialStateMicroType = {
  isAuth: false,
  swiperData: swiperData,
  timelineCards: timelineCardsData,
  error: null,
};

const timelineSlice = createSlice({
  name: 'timelineSlice',
  initialState,
  reducers: {},
});

//export const { } = timelineSlice.actions;
export default timelineSlice.reducer;
