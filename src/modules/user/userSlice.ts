import { createSlice } from '@reduxjs/toolkit';
import { InitialStateUserType } from '../../core/redux/types/userSliceType';

const initialState: InitialStateUserType = {
  skillsData: [
    {
      tools: {
        title: 'Инструменты',
        item: ['Гитара', 'Укулеле', 'Саксофон'],
      },
      addTools: 'Добавить инструмент',
      link: '/tools',
    },
    {
      tools: {
        title: 'Жанр',
        item: ['Джаз', 'Поп-музыка'],
      },
      addTools: 'Добавить жанр',
      link: 'genre',
    },
    {
      tools: {
        title: 'Опыт работы',
        item: [],
      },
      notice: {
        text: 'Бар “Джаз”',
        data: '2010-2021',
      },
      addTools: 'Добавить опыт работы',
      link: '/experience',
    },
    {
      tools: {
        title: 'Образование',
        item: [],
      },
      notice: {
        text: 'Российская Академия музыки им. Гнесеных',
        data: '2010-2021',
      },
      addTools: 'Добавить учебное заведение',
      link: '/education',
    },
  ],
};

const userSlice = createSlice({
  name: 'authSlice',
  initialState,

  reducers: {},
});

//export const { } = userSlice.actions;
export default userSlice.reducer;
