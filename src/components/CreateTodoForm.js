import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      todo: ''
    }
    // Don't let this part scare you; it does something simple.
    // When we go into a new function, that normally changes our context therefore changing what 'this' points to.
    // The next to lines use the function .bind so that 'this' in onInputChange and onFormSubmit still points to 'this' here in CreateTodoForm. More on bind below:
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    //this corresponds to the form component
    //this.target.value is equal to the string inside of the text entry
    this.setState({
      todo: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let todo = this.state.todo
    //sends data to container which saves data to API
    this.props.createTodo(todo)
    this.setState({
      todo: ""
    })
  }
  //adding an event listener onInputChange that i need to define
  //onInputChange will update the component state
  //the submit event will be handeled by a event listener
  //create a state
  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input
            onChange={ this.onInputChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm
