import { useState } from 'react'
import eye_open from '../../assets/icons/eye_open.webp';
import eye_close from '../../assets/icons/eye_close.webp';
import { Controller, useForm } from 'react-hook-form';
import { InButton } from '../../common/ui-elements/button/InButton';
import { Input } from '../../common/ui-elements/Input/Input'
import s from './style/formRegister.module.scss'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../core/redux/app/hooks';
import { authThunkLogin } from './authThunkLogin';
import { ISignInFormValues } from './types/type';

export const FormLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const [eye, setEye] = useState(false)
  const toggleEye = () => setEye(prev => !prev)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignInFormValues>({
    mode: "onBlur", defaultValues: {
      login: "",
      password: "",
    }
  });


  const onSubmit = (data: ISignInFormValues) => {
    dispatch(authThunkLogin(data))
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.styleInput}>

        <Controller
          name="login"
          control={control}
          rules={{ required: "Email обязателен" }}
          render={({ field: { onChange } }) => (
            <Input
              type="text"
              inputLabel='Email'
              placeholderValue='Введите Email'
              errors={errors.login && errors.login.message}
              onChange={onChange}
            />
          )}
        />

      </div>
      <div className={s.styleInput}>

        <Controller
          name="password"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field: { onChange } }) => (<>
            <Input
              type={eye ? 'text' : 'password'}
              inputLabel='Password'
              placeholderValue='Введите пароль'
              errors={errors.password && errors.password.message}
              onChange={onChange}
            >
              {
                watch("password").length > 0 && (
                  eye ? <img onClick={toggleEye} className={s.see} src={eye_open} alt={eye_open} />
                    : <img onClick={toggleEye} className={s.see} src={eye_close} alt={eye_close} />
                )
              }
            </Input>
          </>
          )}
        />
      </div>

      <div className={s.styleBtn}>
        <InButton textButton='Войти' />
      </div>
    </form>
  )
}
