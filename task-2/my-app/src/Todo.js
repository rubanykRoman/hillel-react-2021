import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <>
                <li className={this.props.todo.completed ? "completed" : "not-completed"}>
                    {this.props.todo.title}
                </li>
            </>
        )
    }
}