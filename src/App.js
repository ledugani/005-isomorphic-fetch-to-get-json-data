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

  render() {
    return (
      <div>
        <Facts
          facts={this.state.facts}
          value={this.state.newFact}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default App;