import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => doMath()}>
      =
    </button>
  );
};

export default NumberButton;
