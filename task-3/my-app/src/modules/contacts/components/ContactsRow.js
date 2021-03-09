import React, { Component } from 'react'

export default class ContactsRow extends Component {

    onDelBtnClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.item.id)
    }

    onEditBtnClick = (e) => {
        e.stopPropagation();

        this.props.onEdit(this.props.item.id)
    }

    render() {

        const { item } = this.props;

        return (
            <tr>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.surname}
                </td>
                <td>
                     {item.phone}
                </td>
                <td>
                    <button onClick={this.onDelBtnClick}>del</button>
                </td>
                <td>
                    <button onClick={this.onEditBtnClick}>edit</button>
                </td>
            </tr>
        )
    }
}
