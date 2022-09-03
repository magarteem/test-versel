import { Link } from 'react-router-dom';
import plas from '../../../assets/icons/plas.webp';
import Pencil from '../../../assets/icons/Pencil.webp';
import settings from '../../../assets/icons/settings.webp';
import avatarTest from '../../../assets/images/avatarTest.webp';
import { RouteNames } from '../../variables/RouteNames';
import s from './cardsProfile.module.scss';

export const CardsProfile: React.FC = () => {
  return (
    <div className={s.cardsProfile} >
      <div className={s.title}>
        <h1>Анкета 1</h1>
        <Link to={RouteNames.SETTINGS}>
          <img src={settings} alt={settings} />
        </Link>
      </div>

      <div className={s.infoAccount}>
        <div className={s.photo}>
          <div className={s.wrapperImg}>
            <img src={plas} alt={plas} />
          </div>

          <div className={s.wrapperPhoto} >
            <img src={avatarTest} alt={avatarTest} />
          </div>

          <div className={s.wrapperImg}>
            <img src={Pencil} alt={Pencil} />
          </div>
        </div>
        <div className={s.nameProfile}>
          <h2>Александр Ковальчук</h2>
          <span>Москва</span>
        </div>
      </div>
    </div>
  )
}
