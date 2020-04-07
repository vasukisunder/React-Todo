import React from "react";

class TodoForm extends React.Component {
    constructor (){
        super();
        this.state = {
            itemName: ""
        };
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({itemName: event.target.value})
    };

    submitItem = event => {
        event.preventDefault();
        this.setState({item: ''});
        this.props.addItem(event, this.state.itemName);

    }

    render() {
        console.log("rendering form");
        return (
            <form onSubmit = {this.submitItem}>
                <input type="text" name = "item"
                onChange = {this.handleChanges}
                value = {this.state.itemName}
                 />
                <button>Add</button>
                
            </form>
        )
    }
}

export default TodoForm;