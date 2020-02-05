import React, { useState } from 'react';
import * as DATA from '../../utils/data';
const HeroStats = props => {
    const [hero,setHero] = useState({
        name:"Anonymous",
        level:1,
        race:"Human",
        job:"Peasant",
        arcana:1,//F D C B A S S+
        statPts: 27,
        strength:0, //Pitiful Weak Average Strong Excellent Superior Overwhelming
        dexterity:0,
        constitution:0,
        intelligence:0,
        wisdom:0,
        charisma:0
    });
    const improveStat = event => {
        const stat = event.target.className.split(' ')[0];
        stat === 'arcana'
            ? setHero({ ...hero, statPts:hero.statPts-3*(hero[stat]), [stat]:hero[stat]+1})
            : setHero({ ...hero, statPts: hero.statPts-(hero[stat]+1), [stat]:hero[stat]+1,});
    }
    return (
        <div className="Hero-Stats">
            <h3>{`${hero.name} the ${DATA.ARCRATINGS[hero.arcana]}, ${hero.race} ${hero.job}`}</h3>
            <p>{`Level: ${hero.level}`}</p>
            {hero.statPts > 0 ? <p>Unspent point(s):<span className="unspent-stats">{`${hero.statPts}`}</span></p>:null}
            <p>
                {`STR: ${DATA.GRADES[hero.strength]}`}
                {hero.statPts > hero.strength && hero.strength < 5 ? <button className="strength stat-button" onClick={improveStat}>{`-${hero.strength+1}`}</button>:null}
            </p>
            <p>
                {`DEX: ${DATA.GRADES[hero.dexterity]}`}
                {hero.statPts > hero.dexterity && hero.dexterity < 5 ? <button className="dexterity stat-button" onClick={improveStat}>{`-${hero.dexterity+1}`}</button>:null}
            </p>
            <p>
                {`CON: ${DATA.GRADES[hero.constitution]}`}
                {hero.statPts > hero.constitution && hero.constitution < 5 ? <button className="constitution stat-button" onClick={improveStat}>{`-${hero.constitution+1}`}</button>:null}
            </p>
            <p>
                {`INT: ${DATA.GRADES[hero.intelligence]}`}
                {hero.statPts > hero.intelligence && hero.intelligence < 5 ? <button className="intelligence stat-button" onClick={improveStat}>{`-${hero.intelligence+1}`}</button>:null}
            </p>
            <p>
                {`WIS: ${DATA.GRADES[hero.wisdom]}`}
                {hero.statPts > hero.wisdom && hero.wisdom < 5 ? <button className="wisdom stat-button" onClick={improveStat}>{`-${hero.wisdom+1}`}</button>:null}
            </p>
            <p>
                {`CHA: ${DATA.GRADES[hero.charisma]}`}
                {hero.statPts > hero.charisma && hero.charisma < 5 ? <button className="charisma stat-button" onClick={improveStat}>{`-${hero.charisma+1}`}</button>:null}
            </p>
            <br/>
            <p>
                {`Arcana: ${DATA.GRADES[hero.arcana]}`}
                {hero.statPts > hero.arcana*3-1 && hero.charisma < 5 ? <button className="arcana stat-button" onClick={improveStat}>{`-${(hero.arcana)*3}`}</button>:null}
            </p>
        </div>
    )
}

export default HeroStats;