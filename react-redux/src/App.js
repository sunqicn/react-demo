import React, { Component } from 'react';

import {view as Todos} from './components/todos'
import {view as Filter} from './components/filter'
class App extends Component {
  render() {
    return (
      <div className = "App">
        <Todos />
        <Filter />
      </div>
    );
  }
}

export default App;
