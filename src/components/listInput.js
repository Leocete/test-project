import React from 'react';
import './listInput.css'

export default class ListInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.inputText};    
    }

    handleChange = event => this.setState({value: event.target.value})
    
    addItem = (item) => {
        // Ensure the todo text isn't empty
        if (item.length > 0) {
          this.props.addItem(item);
          this.setState({value: ''});
        }   
    }

    render() {
      return (
        <div className='list-input'>
            <input type='text' value={this.state.value} onChange={this.handleChange} placeholder={'Type name here...'}/>
            <button className='btn btn-primary' onClick={() => this.addItem(this.state.value)}>Add new</button>
        </div>
      )
    }
  }