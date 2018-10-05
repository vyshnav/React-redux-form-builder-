import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import store from './state/store'
import {persistStore} from 'redux-persist';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/dist/css/react-widgets.css'


class Main extends React.Component {
  state = {
    appIsReady: false
  }

  componentDidMount() {
    persistStore(store, {}, () => this.setState({appIsReady: true}));
  }

  render() {
    if(!this.state.appIsReady) {
      return <h1>Loading...</h1>
    }
    return <App />;
  }
}

ReactDOM.render((
  <Provider store={store} >
    <Main />
  </Provider>
), document.getElementById('root'));
