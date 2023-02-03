import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
    }
  }

  handleCheck = (id) => {

    this.setState(prevState => {
      const newState = prevState;
      const newIdeas = newState.ideas.map(idea => {
        if(idea.id === id) {
          return {
            ...idea,
            isBad: !idea.isBad
          }
        }
        return idea;
      })
      return { ideas: newIdeas }
    })
  }

  addIdea = (idea) => {
    this.setState({ ideas: [...this.state.ideas, idea]})
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas handleCheck={this.handleCheck} ideas={this.state.ideas.filter(idea => !idea.isBad)} isBad={false} />
        <Ideas handleCheck={this.handleCheck} ideas={this.state.ideas.filter(idea => idea.isBad)} isBad={true} />
      </main>
    )
  }
}



export default App;
