import React, { Component } from "react";
import propsTypes from 'prop-types';


class BodySection extends Component {
    render(){
    return(
        <div className='bodySection'>
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
    )}
}

BodySection.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.oneOfType([propsTypes.string, propsTypes.element])
}

export default BodySection