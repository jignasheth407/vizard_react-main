import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import "bootstrap/scss/bootstrap.scss";
import App from './components/App';
import reducers from './reducers';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <div className="app" id="app">
        <div id="overlay-content" className="overlay overlay-hide" />
        <App />
      </div>
    </Provider>
  </I18nextProvider>,
    document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
