import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as DATA from './utils/data';
import Header from './components/Header';
import HomePage from './components/HomePage';
import * as Hero from './components/hero';
import * as Adventure from './components/adventure';
import * as Lore from './components/lore';
import * as Options from './components/options';
import './index.css';
import CreateHero from './components/CreateHero';
import { connect } from 'react-redux';

const App = props => {
  useEffect(() => {
    const files = window.localStorage.getItem('files');
    if (files) {
      //LOAD_FILES
      console.log('Loading files from local storage');
    } else {
      console.log('No files found creating local storage');
      window.localStorage.setItem(
        'files',
        JSON.stringify([DATA.FILES_SHAPE, DATA.FILES_SHAPE, DATA.FILES_SHAPE])
      );
    }
  }, []);
  return (
    <div className='App'>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={HomePage} />
        <Route path='/create_character' component={CreateHero} />
        <Route path='/hero/stats' component={Hero.Stats} />
        <Route path='/hero/gear' component={Hero.Gear} />
        <Route path='/hero/skills' component={Hero.Skills} />
        <Route path='/hero/abilities' component={Hero.Abilities} />
        <Route path='/hero/items' component={Hero.Items} />
        <Route path='/adventure/explore' component={Adventure.Explore} />
        <Route path='/adventure/travel' component={Adventure.Travel} />
        <Route path='/lore/arcana' component={Lore.Arcana} />
        <Route path='/lore/artifacts' component={Lore.Artifacts} />
        <Route path='/lore/beastiary' component={Lore.Beastiary} />
        <Route path='/lore/locations' component={Lore.Locations} />
        <Route path='/lore/people' component={Lore.People} />
        <Route path='/options/save' component={Options.Save} />
        <Route path='/options/load' component={Options.Load} />
        <Route path='/options/reset' component={Options.Reset} />
        <Route path='/options/display' component={Options.Display} />
        <Route path='/options/sound' component={Options.Sound} />
        <Route path='/options/info' component={Options.Info} />
        {props.file < 0 ? <Redirect to='/' /> : null}
      </div>
      {/* 
      Header
      
      */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    file: state.file
  };
};

export default connect(mapStateToProps, {})(App);
