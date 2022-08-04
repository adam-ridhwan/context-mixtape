import { useContext } from 'react';
import { Song } from '../Components/Song';
import { INIT_GENRE, INIT_SORT_ASCENDING } from '../Constants/Constants';
import { MixtapeContext } from '../Contexts/MixtapeContext';

const sortSongs = (songs, sortOrder) => {
  return sortOrder === INIT_SORT_ASCENDING
    ? songs.sort((a, b) => a.year - b.year)
    : songs.sort((a, b) => b.year - a.year);
};

const filterSongs = (songs, genre) => {
  const filteredSongs = songs.filter(song => song.genre === genre);
  return iterateSongs(filteredSongs);
};

const iterateSongs = songs => {
  return songs.map(song => <Song {...song} key={song.name} />);
};

export const SongList = () => {
  const { songs, genre, sortOrder } = useContext(MixtapeContext);

  const sortedSongs = sortSongs(songs, sortOrder);

  return genre !== INIT_GENRE
    ? filterSongs(sortedSongs, genre)
    : iterateSongs(sortedSongs);
};
