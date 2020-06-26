import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import routes from './AppRouting.Module';

class App extends React.Component {
  render() {
    const routeComponents = routes.map(({ path, component }, key) =>
      <Route exact path={path} component={component} key={key} />);
    return (
      <main>
        <switch>
          {routeComponents}
        </switch>
      </main>
    );
  }
}

export default App;
