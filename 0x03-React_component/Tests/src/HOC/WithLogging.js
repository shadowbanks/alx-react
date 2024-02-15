import React, { Component } from "react";

const WithLogging = (wrappedComponent) => {
    class updateComponent extends Component {
        displayName = wrappedComponent.displayName || wrappedComponent.name || 'Component';
        componentDidMount(){
            console.log(`Component ${this.displayName} is mounted `);
        }
        componentWillUnmount(){
            console.log(`Component ${this.displayName} is going to unmount`);
        }
        render(){
            return(<wrappedComponent {...this.props} />);
        }
    }
};

export default WithLogging;