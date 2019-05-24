import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleClearValue()}>
      C
    </button>
  );
};

export default NumberButton;
