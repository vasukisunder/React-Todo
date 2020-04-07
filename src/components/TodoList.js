import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    return (
        <div>
            {props.todos.map(item => (
                <Todo key = {item.id} item = {item}  toggleItem = {props.toggleItem} />
            ))}
            <button className = "clear-btn" onClick = {props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;