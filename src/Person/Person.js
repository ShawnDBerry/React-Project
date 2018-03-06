import React, {Component} from 'react';
import './Person.css';

export default class Person extends Component {
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