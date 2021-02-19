import React from 'react';
import { BrowserRouter, Switch, Route ,Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';

import Home from './containers/home/main';
import Dummy from './containers/other/main';

class App extends React.Component {
  constructor(props){
    console.log = function() {};
    console.error = function() {};
    console.warn = function() {};
    console.disableYellowBox = true
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {

  }

render(){
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/demo" component={Dummy}/>
      </Switch>
   </div>
  );
}
}

export default App;
