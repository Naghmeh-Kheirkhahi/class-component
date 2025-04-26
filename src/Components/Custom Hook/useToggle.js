
import { useState } from 'react';

function useToggle(initialValue = false) { // default value is false.
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(prev => !prev); // flip true <-> false
  };

  return [value, toggle]; // return current state and toggle function
}

export default useToggle;