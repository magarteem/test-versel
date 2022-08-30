import { ChangeEvent, useState } from 'react';
import { Input } from '../common/ui-elements/Input/Input';
import filter from '../assets/icons/filter.webp';
import search from '../assets/icons/search.webp';
import { SwiperSlider } from '../modules/timeline/SwiperSlider';
import { Timeline } from '../common/layout/timeline/Timeline';
import { useAppSelector } from '../core/redux/app/hooks';
import s from './styles/timelinePage.module.scss';

export const NewsPage = () => {
  const [impValue, setImpValue] = useState("")
  const timelineCardsData = useAppSelector(state => state.timelineSliceReducer.timelineCards)

  const changeImpValue = (e: ChangeEvent<HTMLInputElement>) => setImpValue(e.target.value)

  return <>
    <section className={s.header}>

      <div className={s.timeline}>
        <h1>Обявления</h1>
        <div className={s.imgFilter}>
          <img src={filter} alt={filter} />
          <span>2</span>
        </div>
      </div>

      <div className={s.search}>
        <Input type="text"
          inputLabel=''
          inputValue={impValue}
          placeholderValue='Поиск'
          onChange={changeImpValue} >
          <img className={s.searchIcon} src={search} alt={search} />
        </Input>
      </div>

    </section>

    <section className={s.main}>
      <SwiperSlider />

      <div className={s.participant}>
        {
          timelineCardsData.map(x => <Timeline key={x.name} elem={x} />)
        }
      </div>

    </section>
  </>
}
