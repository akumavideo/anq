import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import './index.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import Messages from './Messages';

addLocaleData([...en, ...ja]);

const userLocale = (window.navigator.languages && window.navigator.languages[0]) ||
  window.navigator.language;
// TODO: https://qiita.com/shogo82148/items/548a6c9904eb19269f8c
// const userLocale = (window.navigator.languages && window.navigator.languages[0]) ||
//   window.navigator.language ||
//   window.navigator.userLanguage ||
//   window.navigator.browserLanguage;

interface AppState {
}

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore<AppState>(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider
      locale={userLocale}
      messages={Messages[userLocale]}
    >
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
