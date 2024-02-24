import React, { Component } from "react";
import propTypes from 'prop-types';


class BodySection extends Component {
    render(){
    return(
        <div className='bodySection'>
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
    )}
}

BodySection.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([propTypes.string, propTypes.element])
}

export default BodySection;
