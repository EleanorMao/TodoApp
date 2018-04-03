import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' // get
import { bindActionCreators } from 'redux' // ?
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos, actions}) => {
  return (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  )
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {todos: state.todos}
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(TodoActions, dispatch)
  return {actions}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
