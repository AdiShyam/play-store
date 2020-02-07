import React from 'react';
import AppThumbNail from './App-ThumbNail';
import { Link } from 'react-router-dom';

class ApplicationList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedApp: {},
        }
    }

    handleAppCick = (application) => {
        this.setState({selectedApp: application })
        this.props.selectedApplication(application);
    }

    renderAppList(appStoreList, category) {
        if(appStoreList) {
            // console.log("this is appStore data", appStoreList);
            return ( appStoreList.map((application) => {
                const { title } = application;
                return (<Link className="application-list-Link" to={`/${category}/${title}`} key={title} id={title}
                    onClick = {this.handleAppCick} >
                    <AppThumbNail selectedApp= {this.handleAppCick} key={title} appData={application} />
                </Link>)
            }))
        }
        return null
    }


    render() {
        const appStoreList = this.props.appListData;
        const category = this.props.category;
        return(
            <div className= "applciation-list-container">
                {this.renderAppList(appStoreList, category)}
            </div>
        )
    }
}

export default ApplicationList;
