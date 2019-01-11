import React, { Component } from 'react';
import './App.css';
import ListInput from './components/listInput'
import ListItem from './components/listItem'
import SideBar from './components/sideBar'
import CommentsSection from './components/commentsSection'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          id: 1, 
          title: 'First item',
          commentsCount: 0,
          comments: [],
        },
        {
          id: 2, 
          title: 'Second item',
          commentsCount: 0,
          comments: [],
        },
        {
          id: 3, 
          title: 'Third item',
          commentsCount: 0,
          comments: [],
        },
      ],
      activeItem: {},
      isHidden: true
    }
  }
  // Add new item to the list
  addItem = inputText => {
    let itemsCopy = this.state.items.slice();
    itemsCopy.push({id: this.state.items.length + 1, title: inputText, commentsCount: 0, comments: [], displayComment: false});

    this.setState({
      items: itemsCopy
    },
      this.saveToLocal)
  }
  // Remove the item from the list: check if the clicked button id is match 
  removeItem = id =>
    this.setState({
      items: this.state.items.filter((item, index) => item.id !== id)
    },
    this.saveToLocal)

  addComment = (inputComment) => {
    // find item with id passed and select its comments array
     const commentCopy = this.state.items.map(item => {
       if (item.id === this.state.activeItem.id) {
         return {
           ...item, 
           commentsCount: item.comments.length + 1,
           comments: item.comments.concat({id: item.comments.length + 1, text: inputComment})
          } 
       }
         return item
      });
      this.setState({
       items: commentCopy
     },
       this.saveToLocal)
   }

  getActiveItem = () => this.state.items.find(item => item.id === this.state.activeItem.id)

  saveToLocal = () => {
    const local = this.state.items;
    localStorage.setItem("items", JSON.stringify(local));
  }

  componentDidMount() {
    const items = JSON.parse( localStorage.getItem( "items" ) );
    this.setState( { items } );
}

  render() {
    console.log(this.state.items.isHidden)
    console.log(window.localStorage)
    return (
      <div className='App'>
        <SideBar />
        <div className='flex-container'>
          <div className='list-wrapper'>
            <h1>Items</h1>
            <ListInput inputText='' addItem={this.addItem}/>
            <ul>
              {
                this.state.items.map((item) => 
                (<ListItem 
                    item={item} 
                    key={item.id} 
                    id={item.id} 
                    removeItem={this.removeItem} 
                    setActiveComment={() => this.setState({ activeItem: item })} 
                    toggleHidden={() => this.setState({ isHidden: false })}
                  />
                ))
              }
            </ul>
          </div>
            {!this.state.isHidden && <CommentsSection 
              addComment={this.addComment} 
              activeItem={this.getActiveItem()}
            />} 
        </div>  
      </div>
    );
  }
}
export default App;
