import React, { Component } from 'react';

class AddToDo extends Component {
    state = {
        title: '',
    };

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value });
    };

    handleAddButton = () => {
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        };
        this.props.addNewToDo(todo);
        this.setState({ title: '' });
    };

    handleEnterButton = (event) => {
        if (event.keyCode === 13) {
            let todo = {
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
            };
            this.props.addNewToDo(todo);
            this.setState({ title: '' });
        }
    };

    render() {
        window.addEventListener('keydown', (event) => {
            this.handleEnterButton(event);
        });
        let { title } = this.state;
        return (
            <div>
                <div className="add-todo">
                    <input
                        type="text"
                        value={title}
                        placeholder="Todo"
                        onChange={(event) => this.handleChangeTitle(event)}
                    />
                    <button type="button" className="add" onClick={this.handleAddButton}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default AddToDo;
