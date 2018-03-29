import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props){
        super(props)
    console.log('[Persons.js] inside Constructor()', props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWIllMount()');
  }
  
  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
      console.log('[UPDATE Persons.js] componentWillReceiveProps', nextProps)
  }

  

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js Inside componentWillUpdate()')
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js Inside componentDidUpdate()')
  }
    render(){
        console.log('[Persons.js] Inside render()')
 return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />
      } );
    }
}

export default Persons;