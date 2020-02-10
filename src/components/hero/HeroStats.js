import React from 'react';
import { connect } from 'react-redux';
import { heroSpendStatPoints as spendPoints } from '../../redux/actions';
import * as DATA from '../../utils/data';
const HeroStats = props => {
  const { hero } = props;
  const improveStat = e => {
    props.spendPoints(e.target.className.split(' ')[0]);
  };
  return (
    <div className='Hero-Stats'>
      <h3>{`${hero.name} the ${DATA.ARCRATINGS[hero.arcana]}, ${hero.race} ${
        hero.job
      }`}</h3>
      <p>{`Level: ${hero.level}`}</p>
      {hero.statPoints > 0 ? (
        <p>
          Unspent point(s):
          <span className='unspent-stats'>{`${hero.statPoints}`}</span>
        </p>
      ) : null}
      <p>
        {`STR: ${DATA.GRADES[hero.strength]}`}
        {hero.statPoints > hero.strength && hero.strength < 5 ? (
          <button
            className='strength stat-button'
            onClick={improveStat}
          >{`-${hero.strength + 1}`}</button>
        ) : null}
      </p>
      <p>
        {`DEX: ${DATA.GRADES[hero.dexterity]}`}
        {hero.statPoints > hero.dexterity && hero.dexterity < 5 ? (
          <button
            className='dexterity stat-button'
            onClick={improveStat}
          >{`-${hero.dexterity + 1}`}</button>
        ) : null}
      </p>
      <p>
        {`CON: ${DATA.GRADES[hero.constitution]}`}
        {hero.statPoints > hero.constitution && hero.constitution < 5 ? (
          <button
            className='constitution stat-button'
            onClick={improveStat}
          >{`-${hero.constitution + 1}`}</button>
        ) : null}
      </p>
      <p>
        {`INT: ${DATA.GRADES[hero.intelligence]}`}
        {hero.statPoints > hero.intelligence && hero.intelligence < 5 ? (
          <button
            className='intelligence stat-button'
            onClick={improveStat}
          >{`-${hero.intelligence + 1}`}</button>
        ) : null}
      </p>
      <p>
        {`WIS: ${DATA.GRADES[hero.wisdom]}`}
        {hero.statPoints > hero.wisdom && hero.wisdom < 5 ? (
          <button
            className='wisdom stat-button'
            onClick={improveStat}
          >{`-${hero.wisdom + 1}`}</button>
        ) : null}
      </p>
      <p>
        {`CHA: ${DATA.GRADES[hero.charisma]}`}
        {hero.statPoints > hero.charisma && hero.charisma < 5 ? (
          <button
            className='charisma stat-button'
            onClick={improveStat}
          >{`-${hero.charisma + 1}`}</button>
        ) : null}
      </p>
      <br />
      <p>
        {`Arcana: ${DATA.GRADES[hero.arcana]}`}
        {hero.statPoints > hero.arcana * 3 - 1 && hero.charisma < 5 ? (
          <button
            className='arcana stat-button'
            onClick={improveStat}
          >{`-${hero.arcana * 3}`}</button>
        ) : null}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hero: state.hero
  };
};

export default connect(mapStateToProps, { spendPoints })(HeroStats);
