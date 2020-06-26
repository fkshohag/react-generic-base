import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import routes from './AppRouting.Module';
import RouteGenerator from './core/utility/route/route.generator';

class App extends React.Component {
  render() {
    RouteGenerator.routes();
    const routeComponents = routes.map(({ path, exact , component }, key) =>
      <Route exact={exact} path={path} component={component} key={key} />);
    return (
      <main>
          {routeComponents}
      </main>
    );
  }
}

export default App;
