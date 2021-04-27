import React from 'react';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;