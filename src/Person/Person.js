import React, {Component} from 'react';
import Radium from 'radium';
import './Person.css';


class Person extends Component {
    constructor(props) {
        super();
        
    };

    render() {
       const style = {
            '@media (min-width: 500px)':{
                width: '450px'
            }
        }

        
        return(
            <div className="Person" style={style}>
            <p onClick={this.props.click}>{this.props.name}</p>
            <p>{this.props.age}</p>
        </div>
        );

    }

}
export default Radium(Person);