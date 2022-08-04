import { useContext } from 'react';
import { MixtapeContext } from '../Contexts/MixtapeContext';
import { DisplaySongs } from '../Services/DisplaySongs';

export const SongList = () => {
  const { songs, genre, sortOrder } = useContext(MixtapeContext);

  return <DisplaySongs songs={songs} genre={genre} sortOrder={sortOrder} />;
};
