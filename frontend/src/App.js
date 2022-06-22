import './App.css';
import Frame from './Components/Frame';
import LSidebar from './Components/LSidebar';
import RSidebar from './Components/RSidebar';

//Redux
import {createStore} from 'redux'
import allReducer from './Redux/reducers';
import { Provider } from 'react-redux';

function App() {

  const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return (
    <Provider store={store}>
    <div id="mobile-notif">
     <h2>Sorry!</h2> 
      This app is only available for wide screens!
      <br />
      Make sure you access it from your laptop or desktop.
    </div>
    <div className='main'>
      <LSidebar/>
      <div className='frame-container'>
        <Frame/>
      </div>
      <RSidebar/>
    </div>
    </Provider>
  );
}

export default App;
