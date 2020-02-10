import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as DATA from '../utils/data';

const CreateHero = props => {
  const [form, setForm] = useState({
    name: '',
    race: 0,
    job: 0,
    stats: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    },
    statPoints: 20,
    skills: []
  });
  const nameChange = e => {
    setForm({
      ...form,
      name: e.target.value.replace(/[&\/\\#,+()$~%:;*?<>{}]/g, '')
    });
  };
  const raceChange = e => {
    setForm({
      ...form,
      race: Number(e.target.value)
    });
  };
  const jobChange = e => {
    setForm({
      ...form,
      job: Number(e.target.value)
    });
  };
  const improveStat = e => {
    const stat = e.target.className.split(' ')[0];
    setForm({
      ...form,
      statPoints: form.statPoints - (form.stats[stat] + 1),
      stats: { ...form.stats, [stat]: form.stats[stat] + 1 }
    });
  };
  const reduceStat = e => {
    const stat = e.target.className.split(' ')[0];
    setForm({
      ...form,
      statPoints: form.statPoints + form.stats[stat],
      stats: { ...form.stats, [stat]: form.stats[stat] - 1 }
    });
  };
  return (
    <div className='hero-creation'>
      <form className='text-form'>
        <label>
          Name:
          <input onChange={nameChange} type='text' />
        </label>
        <label>
          Race:
          <select onChange={raceChange}>
            <option value='0'>Human</option>
            <option value='1'>Elf</option>
            <option value='2'>Dwarf</option>
            <option value='3'>Halfling</option>
            <option value='4'>Gnome</option>
          </select>
        </label>
        <label>
          Job:
          <select onChange={jobChange}>
            <option value='0'>Farmer</option>
            <option value='1'>Ruffian</option>
            <option value='2'>Apprentice</option>
            <option value='3'>Wastrel</option>
            <option value='4'>Student</option>
          </select>
        </label>
      </form>
      <div className='stats-form'>
        <p>
          Unspent point(s):
          <div className='unspent-stats'>{`${form.statPoints}`}</div>
        </p>
        {DATA.STATS.map((stat, i) => (
          <p key={i}>
            {`${DATA.STATS_SHORT[i]}: ${DATA.GRADES[form.stats[stat]]}`}
            {form.statPoints > form.stats[stat] && form.stats[stat] < 5 ? (
              <button
                className={`${stat} stat-button`}
                onClick={improveStat}
              >{`${DATA.GRADES[form.stats[stat] + 1]}(-${form.stats[stat] +
                1})`}</button>
            ) : null}
            {form.stats[stat] > 0 ? (
              <button
                className={`${stat} lower-button`}
                onClick={reduceStat}
              >{`${DATA.GRADES[form.stats[stat] - 1]}(+${
                form.stats[stat]
              })`}</button>
            ) : null}
          </p>
        ))}
      </div>
      <div className='hero-preview'>
        <p>{`${form.name} the ${DATA.RACES[form.race].name} ${
          DATA.JOBS.t1[form.job].name
        }`}</p>
        <p>{`Racial Bonus: ${DATA.RACES[form.race].info}`}</p>
        <p>Job Skill Bonuses:</p>
        <ul>
          {DATA.JOBS.t1[form.job].skills.map((skill, i) => (
            <li key={i}>&emsp;&emsp;{skill.split('_').join(' ')}</li>
          ))}
        </ul>
        {DATA.STATS.map((stat, i) => (
          <p key={i}>
            {`${DATA.STATS_SHORT[i]}: ${DATA.GRADES[form.stats[stat]]}`}
          </p>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(CreateHero);
