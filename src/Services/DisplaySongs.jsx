import { Song } from '../Components/Song';
import { INITIAL_GENRE, INITIAL_SORT_ORDER } from '../Contexts/MixtapeContext';

const sortSongs = (songs, sortOrder) => {
  return sortOrder === INITIAL_SORT_ORDER
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

export const DisplaySongs = ({ songs, genre, sortOrder }) => {
  const sortedSongs = sortSongs(songs, sortOrder);

  return genre !== INITIAL_GENRE
    ? filterSongs(sortedSongs, genre)
    : iterateSongs(sortedSongs);
};
