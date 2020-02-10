import React from 'react';

const HeroGear = props => {
  const hero = {
    gear: {
      acc1: { name: 'Family Ring(Uncommon,Brass)', stats: [], reqs: [] },
      head: { name: 'Coif(Common,Leather)', stats: [], reqs: [] },
      acc2: { name: 'Holy Symbol(Common,Ebony)', stats: [], reqs: [] },
      left: { name: 'Bucket(Common,Oak)', stats: [], reqs: [] },
      torso: { name: 'Tunic(Common,Linen)', stats: [], reqs: [] },
      right: { name: 'Pitchfork(Common,Iron/Oak)', stats: [], reqs: [] },
      arms: { name: 'Gloves(Common,Leather)', stats: [], reqs: [] },
      legs: { name: 'Trousers(Common,Linen)', stats: [], reqs: [] },
      feet: { name: 'Boots(Common,Leather)', stats: [], reqs: [] }
    }
  };
  return (
    <div className='Hero-Gear'>
      <div className='gear-display'>
        <div className='gear-row'>
          <div className='acc1'>
            Accessory 1:
            <br />
            {hero.gear.acc1.name}
          </div>
          <div className='head'>
            Head:
            <br />
            {hero.gear.head.name}
          </div>
          <div className='acc2'>
            Accessory 2:
            <br />
            {hero.gear.acc2.name}
          </div>
        </div>
        <div className='gear-row'>
          <div className='left-hand'>
            Left Hand:
            <br />
            {hero.gear.left.name}
          </div>
          <div className='torso'>
            Torso:
            <br />
            {hero.gear.torso.name}
          </div>
          <div className='right-hand'>
            Right Hand:
            <br />
            {hero.gear.right.name}
          </div>
        </div>
        <div className='gear-row'>
          <div className='arms'>
            Arms:
            <br />
            {hero.gear.arms.name}
          </div>
          <div className='legs'>
            Legs:
            <br />
            {hero.gear.legs.name}
          </div>
          <div className='feet'>
            Feet:
            <br />
            {hero.gear.feet.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGear;
