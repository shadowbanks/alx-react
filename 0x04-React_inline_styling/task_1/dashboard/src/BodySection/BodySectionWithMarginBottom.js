import React, { Component } from "react";
import BodySection from "./BodySection";
import propsTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
    render(){
    return(
        <div className={css(style.bodySectionWithMargin)}>
            <BodySection {...this.props}  />
        </div>
    )}
}

BodySectionWithMarginBottom.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.oneOfType([propsTypes.string, propsTypes.element])
}

const style = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: "40px",
    }    
})
export default BodySectionWithMarginBottom;
