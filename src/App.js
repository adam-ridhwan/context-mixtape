import { Controls } from './Components/Controls';
import { SongList } from './Components/SongList';
import { songs } from './Constants/Constants';
import { MixtapeProvider } from './Contexts/MixtapeContext';
import './index.css';

const App = () => {
  return (
    <div className='app'>
      <h1 className='heading'>My 🔥 Mixtape</h1>
      <MixtapeProvider songs={songs}>
        <Controls />
        <SongList />
      </MixtapeProvider>
    </div>
  );
};

export default App;
