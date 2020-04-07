import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      todoList: todos
    };
  }

   toggleItem = itemID => {
    console.log(itemID);
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (itemID === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    })
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
    
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  addItem = {this.addItem}/>
        <TodoList todos = {this.state.todoList} toggleItem = {this.toggleItem}
        clearCompleted = {this.clearCompleted} />
        
        
      </div>
    );
  }
}

export default App;
