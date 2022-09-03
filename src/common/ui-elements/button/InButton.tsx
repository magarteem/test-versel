import s from './button.module.scss';

interface PropsButton {
  textButton: string;
  isValid?: boolean;
}

export const InButton: React.FC<PropsButton> = ({ textButton, isValid = true }) => {
  return (
    <div className={s.buttonWrapper} >
      <button type='submit' disabled={!isValid}>
        {textButton}
      </button>
    </div>
  );
};