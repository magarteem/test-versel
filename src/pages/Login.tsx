import { Link } from 'react-router-dom';
import { RouteNames } from '../common/variables/RouteNames';
import { FormLogin } from '../modules/authorization/FormLogin';
import s from './styles/registrationPage.module.scss';

export const Login = () => {

  return (
    <section className={s.section}>
      <FormLogin />
      <div className={s.sign_in}>
        <span>Нет аккаунта??</span>
        <Link to={RouteNames.REGISTER}>
          <button>Зарегистрироватьсяя</button>
        </Link>
      </div>

    </section>
  )
}
