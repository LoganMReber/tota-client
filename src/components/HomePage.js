import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFile } from '../redux/actions';

const HomePage = props => {
  const files = JSON.parse(window.localStorage.getItem('files'));
  useEffect(() => {
    console.log('Current file:', props.file);
  }, [props]);

  const selectFile = event => {
    props.setFile(event.currentTarget.className.split(' ')[1]);
    props.history.push('/create_character');
  };
  return files ? (
    <div className='file-select home'>
      <h1>File Select</h1>
      {files.map((file, i) => (
        <div key={i} onClick={selectFile} className={`file-div ${i}`}>
          <p>{`File ${i + 1}`}</p>
          {file.newGame ? <p>New Game</p> : <p>{`Hero the Race Class Lv.1`}</p>}
          {file.newGame ? null : <p>{`Last Played: ${files[0]}`}</p>}
          {file.newGame ? <i /> : <i>[x]</i>}
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
const mapStateToProps = state => {
  return {
    file: state.file
  };
};
export default connect(mapStateToProps, { setFile })(HomePage);
