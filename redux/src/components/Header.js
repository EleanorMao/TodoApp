import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = (text) => {
    if (text.length) {
      this
        .props
        .addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"/>
      </header>
    )
  }
}
