import { createContext, useState } from 'react';

export const INITIAL_GENRE = 'all';
export const INITIAL_SORT_ORDER = 'ascending';

export const MixtapeContext = createContext();

export const MixtapeProvider = ({ children, songs }) => {
  const [genre, setGenre] = useState(INITIAL_GENRE);
  const [sortOrder, setSortOrder] = useState(INITIAL_SORT_ORDER);

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
