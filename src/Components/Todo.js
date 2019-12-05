import React, { Component} from 'react';
import { connect } from 'react-redux';

import {getTodoList} from '../store/Actions/TodoListActions';

import Header from './Header';
import TodoList from './TodoList'

class Todo extends Component {

  componentDidMount() {
    this.props.dispatch(getTodoList())
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="page-todo">
        <Header />
        <TodoList data={this.props.todoList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList.data
})

export default connect(mapStateToProps)(Todo);
