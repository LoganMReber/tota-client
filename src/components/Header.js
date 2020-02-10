import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  const hero = {
    name: 'Anonymous',
    race: 'Human',
    job: 'Peasant'
  };
  const menuClick = event => {
    event.stopPropagation();
    const path = event.currentTarget.id.split('-');
    props.history.push(`/${path[0]}/${path[1]}`);
  };
  return (
    <div className='Header'>
      <div className='Title-Card'>
        <h1 className='Title'> TOTA </h1>
        <h4 className='Game-Version'>v 0.0.1</h4>
        <h2 className='Subtitle'>
          {`The Story of ${hero.name} the ${hero.race} ${hero.job}.`}
        </h2>
      </div>
      <nav className={props.loaded ? 'Main-Menu' : 'Main-Menu disabled'}>
        <div className='Hero-Menu'>
          <p>Hero</p>
          <div className='dropdown'>
            <ul>
              <li onClick={menuClick} id='hero-stats'>
                <p>Stats</p>
              </li>
              <li onClick={menuClick} id='hero-gear'>
                <p>Gear</p>
              </li>
              <li onClick={menuClick} id='hero-skills'>
                <p>Skills</p>
              </li>
              <li onClick={menuClick} id='hero-abilities'>
                <p>Abilities</p>
              </li>
              <li onClick={menuClick} id='hero-items'>
                <p>Items</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='Adventure-Menu'>
          <p>Adventure</p>
          <div className='dropdown'>
            <ul>
              <li onClick={menuClick} id='adventure-explore'>
                <p>Explore</p>
              </li>
              <li onClick={menuClick} id='adventure-travel'>
                <p>Travel</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='Lore-Menu'>
          <p>Lore</p>
          <div className='dropdown'>
            <ul>
              <li onClick={menuClick} id='lore-arcana'>
                <p>Arcana</p>
              </li>
              <li onClick={menuClick} id='lore-artifacts'>
                <p>Artifacts</p>
              </li>
              <li onClick={menuClick} id='lore-beastiary'>
                <p>Beastiary</p>
              </li>
              <li onClick={menuClick} id='lore-locations'>
                <p>Locations</p>
              </li>
              <li onClick={menuClick} id='lore-people'>
                <p>People</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='Options-Menu'>
          <p>Options</p>
          <div className='dropdown'>
            <ul>
              <li onClick={menuClick} id='options-save'>
                <p>Save</p>
              </li>
              <li onClick={menuClick} id='options-load'>
                <p>Load</p>
              </li>
              <li onClick={menuClick} id='options-reset'>
                <p>Reset</p>
              </li>
              <li onClick={menuClick} id='options-display'>
                <p>Display</p>
              </li>
              <li onClick={menuClick} id='options-sound'>
                <p>Sound</p>
              </li>
              <li onClick={menuClick} id='options-info'>
                <p>Info</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    file: state.file
  };
};

export default connect(mapStateToProps, {})(Header);
