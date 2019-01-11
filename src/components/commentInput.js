import React from 'react';
import './commentInput.css'

export default class CommentInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.inputText};
    }

    handleEnter(event) {
        if (event.charCode === 13 && event.ctrlKey) {
          alert('KeyPress is working');
        }
    }    

    render() {
        return (
            <div className='comment-input'>
                <input type='text' value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleEnter}/>
            </div>
        )
    }    
}