import React from 'react';
import data from "../data";
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../history';
import CategoryContainer from './Category-Container';
import InstallApplication from './InstallApplication';
import { getData } from '../APIs/jsonPlaceHolder';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appStoreList: [],
      appStoreObject: {},
      applicationSelected: {}
    }
  } 
  componentDidMount = async() => {
    // let response = await getData("http://136.18.212.65:6555/v1/list?categories=All"); //rajesh IP
    let response = data;
    let applicationMap = new Map();
    let appStoreList = [];
    const appStoreObject = {};
    let applicationList = response;
    let mapvalue =[];
    for (let i = 0; i < applicationList.length; i++) {
      if(applicationMap.has(applicationList[i].genres)) {
          mapvalue = applicationMap.get(applicationList[i].genres);
          mapvalue.push(applicationList[i]);
        applicationMap.set(applicationList[i].genres, mapvalue)
      } else {
        applicationMap.set(applicationList[i].genres, [applicationList[i]]);
      }
    }

    for (let [key, value] of applicationMap) {
      appStoreObject[key] = value;
    }

    this.setState({ appStoreObject });
  }

  handleSelectedApp = (applicationSelected) => {
    if(applicationSelected.hasOwnProperty('title'))
      this.setState({ applicationSelected })
  }

  render() {
    return (
      <div className="App">
        <Router history = {history} >
          <Switch>
            <Route exact path="/" render={() => <CategoryContainer appStoreObject={this.state.appStoreObject} selectedApp = {this.handleSelectedApp} />} />
            <Route path="/person/:id" render={() => <InstallApplication application={this.state.applicationSelected} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
