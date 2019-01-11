import React from 'react';
import './listItem.css'

export default class ListItem extends React.Component {

    removeItem(id) {
        this.props.removeItem(id);
    }

    render() {
        return (
          <li className='list-item' onClick={() => {this.props.setActiveComment(); this.props.toggleHidden()}}>
            <h3>{this.props.item.title}</h3>
            <span>{this.props.item.commentsCount}</span>
            <div className='button-container'>
                <button onClick={(event) => this.props.removeItem(this.props.id)}>Delete</button>
            </div>
          </li>
        )
    }
}