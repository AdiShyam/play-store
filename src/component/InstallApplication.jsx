import React from 'react';
import  "./InstallApplication.css";

class InstallApplication extends React.Component {

    isPWA(ispwa) {
        if(ispwa) {
            return (<span className="pwd-content">PWA</span>)
        }
    }

    renderbuttons(installationState) {
        if (installationState === "installed") {
            return (
                <div className="install-applcation-title-button-wrapper">
                    <button className="install-applcation-title-button-open custom-button" id="open">
                        Open
                    </button>
                    <button className="install-applcation-title-button-uninstall custom-button" id="uninstall">
                        uninstall
                    </button>
                </div>)
        } else {
            return (
                <div className="install-applcation-title-button-wrapper">
                    <button className="install-applcation-title-button-open custom-button" id="install">
                        install
                    </button>
                </div>
            )
        }
    }

    renderContent(applcaiton) {
        const {title, image, description, installationState, ispwa} = applcaiton;
        debugger;
        console.log("the applcaiton isss", applcaiton);
        return (
            <div className = "install-application-wrapper">
                <div className = "install-application-header">
                    <div className= "install-application-image-wrapper">
                        <img className = "install-application-image" src={image} alt={title} />
                    </div>
                    <div className = "install-application-title-wrapper">
                        <div className="install-application-title">
                            {title}
                        </div>
                        <div className = "install-applcation-title-button-wrapper">
                            {/* <button className="install-applcation-title-button-open custom-button">
                                Open
                            </button>
                            <button className="install-applcation-title-button-uninstall custom-button">
                                uninstall
                            </button> */}
                            {this.renderbuttons(installationState)}
                        </div>
                    </div>
                    {this.isPWA(ispwa)}
                </div>
                <div className="install-applcation-description">
                    Description: <br />
                    {description}
                </div>
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