
import Menu from './component/Menu';
import Tool from './component/Tool';
import Board from './component/Board';
import {Provider} from "react-redux"
import AppStore from './utils/AppStore';


function App() {
  return (
    <Provider store={AppStore}>
      <Menu />
      <Tool />
      <Board />
    </Provider>
  );
}

export default App;
