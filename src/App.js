import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import * as Hero from './components/hero';
import * as Adventure from './components/adventure';
import * as Lore from './components/lore';
import * as Options from './components/options';
import './index.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Route path='/' component={Header}/>
        <Route path='/hero/stats' component={Hero.Stats}/>
        <Route path='/hero/gear' component={Hero.Gear}/>
        <Route path='/hero/skills' component={Hero.Skills}/>
        <Route path='/hero/abilities' component={Hero.Abilities}/>
        <Route path='/hero/items' component={Hero.Items}/>
        <Route path='/adventure/explore' component={Adventure.Explore}/>
        <Route path='/adventure/travel' component={Adventure.Travel}/>
        <Route path='/lore/arcana' component={Lore.Arcana}/>
        <Route path='/lore/artifacts' component={Lore.Artifacts}/>
        <Route path='/lore/beastiary' component={Lore.Beastiary}/>
        <Route path='/lore/locations' component={Lore.Locations}/>
        <Route path='/lore/people' component={Lore.People}/>
        <Route path='/options/save' component={Options.Save}/>
        <Route path='/options/load' component={Options.Load}/>
        <Route path='/options/reset' component={Options.Reset}/>
        <Route path='/options/display' component={Options.Display}/>
        <Route path='/options/sound' component={Options.Sound}/>
        <Route path='/options/info' component={Options.Info}/>
      </div>
      {/* 
      Header
      
      */}
    </div>
  );
}

export default App;
