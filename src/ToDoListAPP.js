import ReactDOM from 'react-dom';
import React, { Component } from "react";
import './todolist.css';
import  { FaTimes  } from "react-icons/fa";
import  { GrFormAdd  } from "react-icons/gr";
function Todo(){
    return(
      <div className="todo">
        <div className="todo-title"> To Do List </div>
        <Todobox />
      </div>
    );
}
  class Todobox extends React.Component{
    constructor(props){
      super(props);
      this.state={items:[]};
    }
    addItem=(event)=> {
      
      if(!this.inbox || !this.inbox.value){
        return; 
      }
      
      const len = this.state.items.length;
      const newItem = {
        text: this.inbox.value,
        id: len === 0 ? 1 :this.state.items[0].id + 1
      };
      
      console.log(newItem);
      this.setState({items: [newItem, ...this.state.items]});
      this.inbox.value=("");
    }
    
    removeItem = (id) => {
      const items=this.state.items;
      const found=items.findIndex(item => item.id === id);
      
      if(found>-1){
        items.splice(found,1);
      }
      
      this.setState({items:items});
    }

    addItemByButton =(event) => {
      this.addItem(event);
    }
    addItemByEnter = (event) => {
      if(event.key !== "Enter"){
        return;
      }
      this.addItem(event);
    }
    render(){    
      return(
        <div>
          <div className="search">
            <input type="todotext"
                  onKeyPress={this.addItemByEnter}
                  ref={(a) => this.inbox=a}
                  className="list-input"
              />
            <GrFormAdd 
              className="todoButton" 
              onClick={this.addItemByButton}
              />  
          </div>      
          <ItemList 
            items={this.state.items}
            removeItem={this.removeItem}
            />
        </div>
      );
    }
  }
  
  function ItemList(props){
    const removeItem = (id) => {
      props.removeItem(id);
    }
    const items = props.items.map(
      item => <Items 
                text={item.text}
                id={item.id}
                removeItem={removeItem}/>
    );
    return(
        <ul className="todo-list">{items}</ul>
      )
  }
  
  function Items(props) {
    const removeItem = () => {
      props.removeItem(props.id);
    }
    const todoItemTextId = "TodoItemText" + props.id;
   
    const handleCheckboxChange = (e) => {
    const element = document.getElementById(todoItemTextId);
    if(e.target.checked) {
      element.classList.add("detail-check");
      return;
    }
      element.classList.remove("detail-check");
    }
   
   return(    
       <li className="detail">
       <input type="checkbox" 
              className="detail-checkbox"
              onChange={handleCheckboxChange}     
         /> 
       <div 
         id={todoItemTextId} 
         className="detail-text">
         {props.text}
       </div>
            
            <div 
              className="detail-delete"
              onClick={removeItem}
             >
              <FaTimes className="alert"/>
            </div>
        </li>    
    )
  }

  
  ReactDOM.render(
      <Todo />,
    document.getElementById("root")
  );
  export default Todo;