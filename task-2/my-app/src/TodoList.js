import React, { Component } from 'react'
import Todo from "./Todo.js"

export default class TodoList extends Component {
    render() {
        return (
            <>
                <h3>Todo list:</h3>
                <ul>
                    {this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
                </ul>
            </>
        )
    }
}
