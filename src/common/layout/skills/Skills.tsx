import { memo } from 'react';
import { Link } from 'react-router-dom';
import arrowRight from '../../../assets/icons/arrowRight.png';
import orangePlas from '../../../assets/icons/orangePlas.png';
import { SkillsDataType } from '../../../core/redux/types/userSliceType';
import s from './skills.module.scss';

interface SkillsType {
  skillsDataItem: SkillsDataType;
}

export const Skills = memo(({ skillsDataItem }: SkillsType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileData}>
        <h2>{skillsDataItem.tools.title}</h2>
        <div className={s.skills_item}>
          {skillsDataItem.tools.item &&
            skillsDataItem.tools.item.map((item) => (
              <div className={s.item} key={item}>
                {item}
              </div>
            ))}
          {skillsDataItem.notice && (
            <h3 className={s.organization}>
              {skillsDataItem.notice.text}
              <p>{skillsDataItem.notice.data}</p>
            </h3>
          )}
        </div>
        <div className={s.addTools}>
          <img src={orangePlas} alt={orangePlas} />
          <button>{skillsDataItem.addTools}</button>
        </div>
      </div>
      <Link className={s.profileNavigate} to={skillsDataItem.link}>
        <img src={arrowRight} alt={arrowRight} />
      </Link>
    </div>
  );
});
