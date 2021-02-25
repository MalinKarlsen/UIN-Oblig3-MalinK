import React, { useState } from 'react';

const Alert = ({ props }) => {
  const [state, setState] = useState('');

  const handleClick = () => {
    console.log('Clicked');
    alert(state);
    props(state);
  };
  const handleChange = (event) => {
    setState(event.target.value);
    console.log('change');
  };

  return (
    <>
      <button className="btn" type="button" onClick={handleClick}>
        Klikk
      </button>
      <input type="text" value={state} onChange={handleChange} />
      <p>{state}</p>
    </>
  );
};

export default Alert;
