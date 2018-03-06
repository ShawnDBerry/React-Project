import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor() {
    super();
    this.state = {
      person: [
        {
          id:'dfgdfg',
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
      .map((person, index) => 
      <div>
        <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} key={person.id}></Person>
      </div>);
    return personsList;
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.setState({showing: !this.state.showing})}>Click</button>
        {this.state.showing
          ? <div>
              {this.personList()}
              {/* <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
              <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
              <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person> */}
            </div>
          : null
}

      </div>
    );
    // return React.createElement('div', {className:'App'},
    // React.createElement('h1', null, 'Hi, I\'m a React App!!!'), )
  }
}

export default App;
