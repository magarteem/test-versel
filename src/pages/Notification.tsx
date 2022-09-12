import { useEffect } from 'react';
import { Photo } from '../common/components/photos_/Photo';
import { PreLoader } from '../common/ui-elements/preLoader/PreLoader';
import { useAppDispatch, useAppSelector } from '../core/redux/app/hooks';
import { notificationThunk } from '../modules/notification/notificationThunk';
import s from './styles/tempStyle.module.scss';

export const Notification = () => {
  //const dispatch = useAppDispatch()
  //const { error, isLoading, photo } = useAppSelector(state => state.notificationSliceReducer)

  //console.log(photo)
  //useEffect(() => {
  //  console.log("1")
  //  //dispatch(notificationThunk(1))
  //}, []);


  return (
    <div className={s.tempStyle}>
      <h1>Notification</h1>
      {/*{isLoading ? <PreLoader /> : <Photo photo={photo} />}*/}

    </div>
  )
}
