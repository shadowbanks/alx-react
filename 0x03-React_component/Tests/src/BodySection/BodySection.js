import React from "react";

const BodySection = ({ title, children }) => {
    return(
        <div className='bodySection'>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

BodySection.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.oneOfType([propsTypes.string, propsTypes.element])
}

export default BodySection