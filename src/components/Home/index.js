import React from 'react';
import TopBar from '../lay/TopBar';

function getTopBar() {
  return (
    <A
      name="111"
      handleClick={() => {
        console.log(11);
      }}
    />
  );
}

function A({ handleClick, name }) {
  return <div onClick={handleClick}>{name}</div>;
}
