import { useState } from 'react'
import eye_open from '../../assets/icons/eye_open.png';
import eye_close from '../../assets/icons/eye_close.png';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InButton } from '../../common/ui-elements/button/InButton';
import { Input } from '../../common/ui-elements/Input/Input'
import s from './style/formRegister.module.scss'
import { ISignUpFormValues } from './types/type';

export const FormRegister = () => {
  const navigate = useNavigate();

  const [eye, setEye] = useState(false)
  const [eyeForget, setEyeForget] = useState(false)
  const toggleEye = () => setEye((prev) => !prev)
  const toggleEyeForget = () => setEyeForget((prev) => !prev)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      forgetPassword: "",
    }
  });

  const onSubmit = (data: ISignUpFormValues) => {
    console.log(data)
    navigate("/login", { replace: true });
  };


  const watchHandler = (watches: string, eye: boolean, toggle: () => void) => {
    return watches.length > 0 && (
      eye ? <img onClick={toggle} className={s.see} src={eye_open} alt={eye_open} />
        : <img onClick={toggle} className={s.see} src={eye_close} alt={eye_close} />)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className={s.styleInput}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email обязателен", }}
          render={({ field: { onChange } }) => (
            <Input
              type="text"
              inputLabel='Email'
              placeholderValue='Выберите Email'
              errors={errors.email && errors.email.message}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className={s.styleInput}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Обязательное поле",
            minLength: { value: 3, message: "Не менее 3х символов" },
          }}
          render={({ field: { onChange } }) => (<>
            <Input
              type={eye ? 'text' : 'password'}
              inputLabel='Password'
              placeholderValue='Выберите пароль'
              errors={errors.password && errors.password.message}
              onChange={onChange}
            >

              {watchHandler(watch("password"), eye, toggleEye)}

            </Input>
          </>
          )}
        />
      </div>

      <div className={s.styleInput}>
        <Controller
          name="forgetPassword"
          control={control}
          rules={{
            required: { value: true, message: "Обязательное поле" },
            validate: (value) =>
              value === watch("password", "") || "Пароли не совпадают",
            minLength: { value: 3, message: "Не менее 3х символов" },
          }}
          render={({ field: { onChange } }) => (<>
            <Input
              type={eyeForget ? 'text' : 'password'}
              inputLabel='Forget password'
              placeholderValue='Повторите пароль'
              errors={errors.forgetPassword && errors.forgetPassword.message}
              onChange={onChange}
            >
              {watchHandler(watch("forgetPassword"), eyeForget, toggleEyeForget)}

            </Input>
          </>
          )}
        />
      </div>

      <div className={s.styleBtn}>
        <InButton textButton='Зарегистрироваться' />
      </div>
    </form>
  )
}
