import { useContext } from 'react';
import { INITIAL_SORT_ORDER, MixtapeContext } from '../Contexts/MixtapeContext';

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(MixtapeContext);

  return (
    <div className='controls'>
      <select value={genre} onChange={event => setGenre(event.target.value)}>
        <option value='all'>All</option>
        <option value='hip hop'>Hip Hop</option>
        <option value='rap'>Rap</option>
        <option value='rock'>Rock</option>
        <option value='pop'>Pop</option>
      </select>

      <button
        value={sortOrder}
        onClick={() =>
          setSortOrder(
            sortOrder === INITIAL_SORT_ORDER ? 'descending' : INITIAL_SORT_ORDER
          )
        }
      >
        {sortOrder}
      </button>
    </div>
  );
};
