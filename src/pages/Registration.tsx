import { Link } from 'react-router-dom';
import { FormRegister } from '../modules/authorization/FormRegister';
import { RouteNames } from '../common/variables/RouteNames';
import s from './styles/registrationPage.module.scss';

export const Registration = () => {

  return (
    <section className={s.section}>
      <FormRegister />

      <div className={s.sign_in}>
        <span>Уже есть аккаунт?</span>
        <Link to={RouteNames.LOGIN}>
          <button>Войти</button>
        </Link>
      </div>

    </section>
  )
}
