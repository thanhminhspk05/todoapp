import React, { Component } from 'react';
import { toast } from 'react-toastify';
import AddToDo from './AddToDo';
import './ListToDo.scss';

class ListToDo extends Component {
    state = {
        listToDos: [
            {
                id: 'todo1',
                title: 'Doing homework',
            },
            {
                id: 'todo2',
                title: 'Washing clothes',
            },
            {
                id: 'todo3',
                title: 'Studing English',
            },
        ],
        editToDo: {},
        checkedTodo: {},
        isActive: Array(50).fill(true),
    };

    addNewToDo = (todo) => {
        if (todo.title === '') {
            return;
        }
        this.setState({
            listToDos: [...this.state.listToDos, todo],
        });

        toast.success('Added Success');
    };

    deleteToDo = (todo) => {
        this.setState({
            listToDos: this.state.listToDos.filter((item) => item.id !== todo.id),
        });
        toast.success('Deleted Success');
    };

    handleEditToDo = (todo) => {
        let { editToDo, listToDos } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        if (isEmptyObj === false && editToDo.id === todo.id) {
            let listToDosCopy = [...listToDos];
            let objIndex = listToDosCopy.findIndex((item) => item.id === todo.id);
            listToDosCopy[objIndex].title = editToDo.title;
            this.setState({
                listToDos: listToDosCopy,
                editToDo: {},
            });
            return;
        }
        this.setState({
            editToDo: todo,
        });
    };

    handleUpdateToDo = (event) => {
        let editToDoCopy = { ...this.state.editToDo };
        editToDoCopy.title = event.target.value;
        this.setState({
            editToDo: editToDoCopy,
        });
    };

    handleCheckDone = (todo, index) => {
        console.log(index);
        let isActiveCopy = [...this.state.isActive];
        isActiveCopy[index] = !isActiveCopy[index];
        this.setState({
            isActive: isActiveCopy,
            checkedTodo: todo,
        });
    };

    render() {
        let { listToDos, editToDo, isActive } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        return (
            <>
                <p>Simple TodoApp with ReactJS</p>
                <div className="list-todo-container">
                    <AddToDo addNewToDo={this.addNewToDo} />

                    <div className="list-todo-content">
                        {listToDos &&
                            listToDos.length > 0 &&
                            listToDos.map((item, index) => (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj ? (
                                        <>
                                            {isActive[index] ? (
                                                <div className="todo-content">
                                                    {index + 1}. {item.title}
                                                </div>
                                            ) : (
                                                <div className="todo-content check-done">
                                                    {index + 1}. {item.title}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {editToDo.id === item.id ? (
                                                <div
                                                    style={{
                                                        textDecoration: isActive ? 'line-through' : '',
                                                    }}
                                                    className="todo-content"
                                                >
                                                    {index + 1}.{' '}
                                                    <input
                                                        type="text"
                                                        value={editToDo.title}
                                                        onChange={(event) => {
                                                            this.handleUpdateToDo(event);
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="todo-content">
                                                    {index + 1}. {item.title}
                                                </div>
                                            )}
                                        </>
                                    )}
                                    <button className="edit" onClick={() => this.handleEditToDo(item)}>
                                        {isEmptyObj === false && editToDo.id === item.id ? (
                                            'Save'
                                        ) : (
                                            <i className="fa-solid fa-pen"></i>
                                        )}
                                    </button>
                                    <button className="checked" onClick={() => this.handleCheckDone(item, index)}>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <button className="delete" onClick={() => this.deleteToDo(item)}>
                                        <i className="fa-sharp fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </>
        );
    }
}

export default ListToDo;
