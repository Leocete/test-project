import React from 'react';
import CommentInput from './commentInput'
import CommentsItem from './commentsItem'
import './commentsSection.css';

export default class CommentsSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange = event => this.setState({value: event.target.value})
    
    handleEnter = event => {
        if (event.charCode === 13 && event.ctrlKey) {
            console.log(this.state, this.props)
            this.addComment(this.state.value)
        } 
    }    

    addComment = comment => {
        console.log(this.props.activeComment)
         // Ensure the comment text isn't empty
        if (comment.length > 0) {
          this.props.addComment(comment);
          this.setState({value: ''});
        }   
    }
    
    render() {
        return (
            <div className='comments-section'>
                <h1>{this.props.activeItem && this.props.activeItem.title}</h1>
                <ul>
                      { this.props.activeItem &&
                        this.props.activeItem.comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
                      } 
                </ul>
                {/*<CommentsItem />*/}
                {/*<CommentInput addComment={this.addComment}/>*/}
                <div className='comment-input'>
                    <div className='avatar'></div>
                    <input type='text' value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleEnter}/>
                </div>
            </div>
        )
    }
}