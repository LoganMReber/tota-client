import React from 'react';
import * as DATA from '../../utils/data';
const HeroSkills = props => {
  const hero = {
    skillList: [1, 3, 4, 6, 7, 8, 10],
    skills: [0, 2, 0, 1, 4, 1, 2]
  };
  return (
    <div className='Hero-Skills'>
      {DATA.SKILLS.map((s, i) =>
        hero.skillList.includes(i) ? (
          <div className='skill-listing' key={i}>
            {s.split('_').join(' ')}:
            {DATA.GRADES[hero.skills[hero.skillList.indexOf(i)]]}
          </div>
        ) : null
      )}
    </div>
  );
};

export default HeroSkills;
