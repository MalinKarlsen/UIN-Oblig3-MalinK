import React, { useState } from 'react';
import Alert from './components/Alert';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import './styles.scss';

export default function App() {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  const [inputFromChild, setInputFromChild] = useState('');

  const updatechild = () => {
    setInputFromChild(state);
  };

  return (
    <>
      <h1>The magic happens here</h1>
      <MyComponent title="It Works" />
      <ul>
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <Food food={food} />
      <Wrapper>
        <p>Child</p>
        <p>Child2</p>
        <p>Child3</p>
      </Wrapper>
      <Alert prop={updatechild} />
    </>
  );
}
