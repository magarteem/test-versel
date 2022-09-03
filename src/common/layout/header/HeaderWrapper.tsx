import { ReactNode } from 'react';
import s from './headerWrapper.module.scss';

interface HeaderWrapperType {
  children: ReactNode
}

export const HeaderWrapper = ({ children }: HeaderWrapperType) => {
  return <section className={s.headerWrapper}>{children}</section>
}
