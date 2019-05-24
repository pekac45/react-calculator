import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleBackButton()}>
      {`<-`}
    </button>
  );
};

export default NumberButton;
