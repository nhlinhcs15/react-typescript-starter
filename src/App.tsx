import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/navigation-bar';
import { HomePage } from './pages/home';
import { store } from './store';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <NavigationBar />
          <HashRouter basename="/">
            <Route path="/" component={HomePage} />
          </HashRouter>
        </div>
      </Provider>
    );
  }
}
