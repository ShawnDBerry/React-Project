import React, { Component } from 'react';
import classes from './Cockpit.css';
import WithClass from '../../hos/WithClass'
import Aux from '../../hos/Aux';
class Cockpit extends Component  {
    render(){ 
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (this.props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if ( this.props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( this.props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <Aux>
            <h1>{ this.props.appTitle }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={this.props.clicked}>Toggle Persons</button>
        </Aux>
    );
};
}
export default WithClass(Cockpit, classes.Cockpit);