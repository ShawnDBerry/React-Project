import React, {Component} from 'react';
import Radium from 'radium';
import './Person.css';


class Person extends Component {
    constructor(props) {
        super();
    };

    render() {

        return(
            <div className="Person">
            <p onClick={this.props.click}>{this.props.name}</p>
            <p>{this.props.age}</p>
        </div>
        );

    }

}
export default Radium(Person);