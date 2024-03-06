import React, { Component } from "react";
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";


class BodySection extends Component {
    render(){
    return(
        <div className={`bodySection ${css(style.bodySection)}`}>
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
    )}
}

const style = StyleSheet.create({
    bodySection: {
    '@media (max-width: 900px)': {
        width: '70%',
        margin: "0 auto",
      },
    },
})

BodySection.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([propTypes.string, propTypes.element])
}

export default BodySection;
