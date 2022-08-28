import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../variables/RouteNames';
import { ReactComponent as Home } from '../../../assets/icons/Home.svg';
import { ReactComponent as Notification } from '../../../assets/icons/Notification.svg';
import { ReactComponent as Micro } from '../../../assets/icons/Micro.svg';
import { ReactComponent as User } from '../../../assets/icons/User.svg';
import { ReactComponent as Chats } from '../../../assets/icons/Chats.svg';
import s from './navigateButton.module.scss';

interface LinkActiveType {
  isActive: boolean
}

export const NavigateButton = () => {
  const setActive = ({ isActive }: LinkActiveType) => cn({ [s.active]: isActive })

  return (
    <>
      <NavLink className={setActive} to={RouteNames.HOME}>
        <Home className={cn(s.icon, s.activeSpecified)} />
      </NavLink>

      <NavLink className={setActive} to={RouteNames.MICRO}>
        <Micro className={cn(s.icon, s.activeSpecified)} />
      </NavLink>

      <NavLink className={setActive} to={RouteNames.USER}>
        <User className={s.icon} />
      </NavLink>

      <NavLink className={setActive} to={RouteNames.CHATS}>
        <Chats className={s.icon} />
      </NavLink>

      <NavLink className={setActive} to={RouteNames.NOTIFICATION}>
        <Notification className={s.icon} />
      </NavLink>

    </>
  )
}
