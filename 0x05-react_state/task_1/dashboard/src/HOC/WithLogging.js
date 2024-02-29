import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
    class updateComponent extends Component {
        displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        componentDidMount(){
            console.log(`Component ${this.displayName} is mounted `);
        }
        componentWillUnmount(){
            console.log(`Component ${this.displayName} is going to unmount`);
        }
        render(){
            return(<WrappedComponent {...this.props} />);
        }
    }
    return updateComponent
};

export default WithLogging;