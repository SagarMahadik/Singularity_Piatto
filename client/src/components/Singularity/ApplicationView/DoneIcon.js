import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import DoneIconImage from 'img/piatto/icons/correct.svg';

function DoneIcon() {
  return (
    <Fragment>
      <div style={{ position: 'absolute', top: '400px', left: '100px' }}>
        <img src={DoneIconImage} style={{ height: '200px', width: '200px' }} />
      </div>
    </Fragment>
  );
}

export default DoneIcon;
