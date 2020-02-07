import React from 'react';
import './Category-Container.css';
import ApplicationList from './ApplicationList';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedApp: {}
        }
    }

    handleSelectedApp = (data) => {
        this.props.selectedApp(data);
    }

    renderCategoryContainer(appStoreObject) {
        const containerDOM = []
        for (var category in appStoreObject) {
            // console.log("the category object is ", category);
            containerDOM.push(
                <div className="category-container-wrapper" key={category}>
                    <div className = "category-container-title thumb-nail-title">{category}</div>
                    <ApplicationList selectedApplication = {this.handleSelectedApp}category = {category} appListData={appStoreObject[category]} />
                </div>
            );
        }
        return containerDOM;
    }


    render() {
        return (
            <div className = "category-container">
                {this.renderCategoryContainer(this.props.appStoreObject)}
            </div>
        )
    }

}

export default CategoryContainer;
