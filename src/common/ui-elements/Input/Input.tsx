import { ReactNode } from 'react'
import s from './input.module.scss';

interface InputType {
  inputLabel?: string
  type?: string
  errors?: any
  inputValue?: string;
  children?: ReactNode;
  placeholderValue: string;
  onChange: any
}
export const Input = ({
  children,
  inputLabel,
  type = "text",
  errors,
  inputValue,
  placeholderValue,
  onChange,
  ...props
}: InputType) => {

  return (
    <div className={s.wrapperInput}>
      <label className={s.label} >{inputLabel}</label>

      <input
        className={`${errors && s.error}`}
        type={type}
        value={inputValue}
        placeholder={placeholderValue}
        onChange={onChange}
        {...props}
      />
      {children}
      {errors && <span>{errors}</span>}

    </div>
  )
}