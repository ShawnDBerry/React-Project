import React, {Component} from 'react';

const withClass = (WrappedComponent, classNameFool) => {
    return class extends Component {
        render() {
            return (
                <div className={classNameFool}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }

    }

};

export default withClass;