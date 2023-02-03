import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(){
    super();
    this.state = {
      id: Date.now(),
      title: '',
      description: '',
      isBad: false,
    }
  }

  handleChange = ({ name, value }) => {
      this.setState({ [name]: value })
  }

  submit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      id: Date.now(),
      title: '',
      description: '',
      isBad: false
    })
  }

  render = () => {
    let isDisabled = !this.state.title || !this.state.description ? true : false
    return (
      <form>
        <h2>Got an Idea?</h2>
          <input type="text" placeholder='Title' name="title" value={this.state.title} onChange={event => this.handleChange(event.target)} id="title" />
          <input type="text" placeholder='The Meat' name="description" value={this.state.description} onChange={event => this.handleChange(event.target)} id="description" />
        <button className='submitButton' disabled={isDisabled} onClick={(event) => this.submit(event)}>Commit to the Idea</button>
      </form>
    )
  }
}

export default Form;