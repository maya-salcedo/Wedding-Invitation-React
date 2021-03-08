import React, { useState } from 'react';

const FlagContext = React.createContext(null);

const FlagProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <FlagContext.Provider value={[state, setState]}>
      {props.children}
    </FlagContext.Provider>
  );
}

export { FlagContext, FlagProvider };