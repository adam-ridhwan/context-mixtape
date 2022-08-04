import { createContext, useState } from 'react';
import { INIT_GENRE, INIT_SORT_ORDER } from '../Constants/Constants';

export const MixtapeContext = createContext();

export const MixtapeProvider = ({ children, songs }) => {
  const [genre, setGenre] = useState(INIT_GENRE);
  const [sortOrder, setSortOrder] = useState(INIT_SORT_ORDER);

  return (
    <MixtapeContext.Provider
      value={{
        songs,
        genre,
        setGenre,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </MixtapeContext.Provider>
  );
};
