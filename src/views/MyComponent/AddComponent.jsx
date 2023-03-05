import React, { Component } from 'react';

export class AddComponent extends Component {
    state = {
        title: '',
        salary: '',
    };

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleButtonSubmit = (event) => {
        event.preventDefault();
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });
        this.setState({
            title: '',
            salary: '',
        });
    };
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">Job's title: </label>
                    <input
                        type="text"
                        onChange={(event) => {
                            this.handleChangeTitle(event);
                        }}
                        value={this.state.title}
                        required
                    />{' '}
                    <br />
                    <label htmlFor="">Salary: </label>
                    <input
                        type="text"
                        onChange={(event) => {
                            this.handleChangeSalary(event);
                        }}
                        value={this.state.salary}
                        required
                    />{' '}
                    <br />
                    <button
                        type="submit"
                        onClick={(event) => {
                            this.handleButtonSubmit(event);
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AddComponent;
