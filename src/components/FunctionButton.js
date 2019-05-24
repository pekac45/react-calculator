import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NegativeButton;
