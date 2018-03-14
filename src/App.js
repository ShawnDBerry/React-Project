import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';
require('dotenv').config()

class App extends Component {

  constructor() {
    super();
    this.state = {
      person: [
        {
          id: 'dfgdfg',
          name: 'Max',
          age: 28
        }, {
          id: 'fbav',
          name: 'Manu',
          age: 29
        }, {
          id: 'asfgkr',
          name: 'Stephanie',
          age: 26
        }
      ],
      showing: false
    };
  }

  personList() {
    const personsList = this
      .state
      .person
      .map((person, index) => <Person
        name={person.name}
        age={person.age}
        click={() => this.deletePersonHandler(index)}
        key={person.id}></Person>);
    return personsList;
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  }

  render() {

    const style = {
      backgroundColor: 'orange',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'green',
        color: 'black'
      }
    };
    let persons = null;

    if (this.state.showing) {
      persons = <div>
        {this.personList()}
      </div>
      style.backgroundColor = 'red'
      style.color = 'black'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'green'
      }
    }

    let classes = [];

    if (this.state.person.length <= 2) 
      classes.push('red');
    
    if (this.state.person.length <= 1) 
      classes.push('bold');
    
    let JoinClasses = classes.join(' ');
    return (
      <StyleRoot>
        <div className="App">
          <h1>{process.env.REACT_APP_SECRET_CODE}</h1>
          <p className={JoinClasses}>This is really working!</p>
          <button
            style={style}
            onClick={() => this.setState({
            showing: !this.state.showing
          })}>Click</button>
          {persons}

        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'},
    // React.createElement('h1', null, 'Hi, I\'m a React App!!!'), )
  }
}

export default Radium(App);
