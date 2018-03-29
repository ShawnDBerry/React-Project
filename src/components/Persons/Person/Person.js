import React, { Component } from 'react';
import WithClass from '../../../hos/WithClass';
import classes from './Person.css';
import Aux from '../../../hos/Aux';

class Person extends Component{
    constructor(props){
        super(props)
        console.log('[Person.js] inside Constructor()', props);
        
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWIllMount()');
      }
      
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
      }
    render(){
        console.log('[Person .js] Inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
   
};

export default WithClass(Person, classes.Person);