import React from "react";
import BodySection from "./BodySection";
import propsTypes from 'prop-types';

class BodySectionWithMarginBottom {
    render(){
    return(
        <div className="bodySectionWithMargin">
            <BodySection {...this.props}  />
        </div>
    )}
}

BodySectionWithMarginBottom.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.oneOfType([propsTypes.string, propsTypes.element])
}

export default BodySectionWithMarginBottom;
