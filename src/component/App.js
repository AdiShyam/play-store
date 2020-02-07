import React from 'react';
import faker from 'faker';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../history';
import CategoryContainer from './Category-Container';
import InstallApplication from './InstallApplication';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appStoreList: [],
      appStoreObject: {},
      applicationSelected: {}
    }
  } 

  componentDidMount() {
    let appStoreList = [];
    const appStoreObject = {};
    const applciationCategory = ["Social", "Music", "Video", "Travel", "Tools", "Games", "Shopping" , "Photos", "Reading", "Sports", "Health", "Education"]
    applciationCategory.forEach(category => {
      let randomNumber = Math.floor(Math.random() * 20) + 1;
      appStoreList = [];
      for (let i=0; i<randomNumber; i++) {
        let application = {};
        application.ispwa = true;
        application.title = faker.name.findName();
        application.image = faker.image.avatar();
        application.installationState = (Boolean(Math.round(Math.random())))? "installed": "uninstalled";
        application.developerName = faker.name.findName();
        application.description = faker.lorem.paragraphs();
        appStoreList.push(application);
      }
      appStoreObject[category] = appStoreList;
    });
    this.setState({ appStoreObject, appStoreList });
  }

  handleSelectedApp = (applicationSelected) => {
    if(applicationSelected.hasOwnProperty('title'))
      this.setState({ applicationSelected })
  }

  render() {
    return (
      <div className="App">
        <header className="app-store-header">App Store</header>
        <Router history = {history} >
          <Switch>
            <Route exact path="/" render={() => <CategoryContainer appStoreObject={this.state.appStoreObject} selectedApp = {this.handleSelectedApp} />} />
            <Route path="/:id" render={() => <InstallApplication application={this.state.applicationSelected} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
