import React from 'react';
import  "./InstallApplication.css";
import history from '../history';

class InstallApplication extends React.Component {

    isPWA(ispwa) {
        if(ispwa) {
            return (<span className="pwd-content">PWA</span>)
        }
    }

    handleIninstall = async(el) => {
        console.log("instaill is clicked for ", el.target.id);
        if(window.nativeView !== undefined) {
            window.nativeView.installApplication(el.target.id)
        }
        el.target.innerText = "INSTALLED";
    }

    handleOpen = (el) => {
        console.log("open app", el.target.id)
    }

    handleUnIninstall = (el) => {
        console.log("uninstall app ", el.target.id)
    }

    renderbuttons(installationState, title) {
        if (installationState === "installed") {
            return (
                <div className="install-applcation-title-button-wrapper">
                    <button className="install-applcation-title-button-open custom-button" id={title} onClick={this.handleOpen}>
                        Open
                    </button>
                    <button className="install-applcation-title-button-uninstall custom-button" id={title} onClick={this.handleUnIninstall}>
                        uninstall
                    </button>
                </div>)
        } else {
            return (
                <div className="install-applcation-title-button-wrapper">
                    <button className="install-applcation-title-button-open custom-button" id={title} onClick={this.handleIninstall}>
                        install
                    </button>
                </div>
            )
        }
    }

    handleBack = () => {
        history.push("/");
    }

    renderContent(applcaiton) {
        const {title, icons, description, installationState, isPwa} = applcaiton;
        return (
            <div className = "install-application-wrapper">
                <div className = "install-application-header">
                    <div className= "install-application-image-wrapper">
                        <img className = "install-application-image" src={icons? icons[0].src: null} alt={title} />
                    </div>
                    <div className = "install-application-title-wrapper">
                        <div className="install-application-title">
                            {title}
                        </div>
                        <div className = "install-applcation-title-button-wrapper">
                            {this.renderbuttons(!installationState, title)}
                        </div>
                    </div>
                    {this.isPWA(isPwa)}
                </div>
                <div className="install-applcation-description">
                    Description: <br />
                    {description}
                </div>
                <footer className="install-application-back custom-button" onClick ={this.handleBack}>back</footer>
            </div>
        )
    }

    render() {
        console.log("The prop details are as follow", this.props.application);
        const applcationDetail = this.props.application;
        return this.renderContent(applcationDetail);
    }
}

export default InstallApplication