import React from 'react';
import fetch from 'isomorphic-fetch';

import Facts from './components/facts';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      facts: [],
      newFact: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({
          facts: json
        })
      })
  }

  handleChange(e) {

    this.setState({
      newFact: e.target.value
    })
  }

  handleClick() {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fact: {
          title: this.state.newFact
        }
      })
    }).then(response => response.json())
      .then(json => {
        this.setState({
          newFact: '',
          facts: [
            ...this.state.facts,
            json.fact
          ]
        })
      })
  }

  render() {
    return (
      <div>
        <Facts
          facts={this.state.facts}
          value={this.state.newFact}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App;