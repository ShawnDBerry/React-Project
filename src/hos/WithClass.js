import React from 'react';

const withClass = props => {
    return  (WrappedComponent, className) => 
    <div className={props.MyClasses}>
        {props.children}
    </div>

};

export default withClass;