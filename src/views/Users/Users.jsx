import React, { Component } from 'react';
import axios from 'axios';
import './Users.scss';

class Users extends Component {
    state = {
        users: [],
    };

    async componentDidMount() {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({ users: response.data.data });
    }

    render() {
        let { users } = this.state;
        return (
            <div>
                <h1>Users</h1>
                <div className="user-container">
                    {users.map((user) => (
                        <div className="user-content" key={user.id}>
                            <span className="user-name">
                                {user.first_name} {user.last_name}
                            </span>
                            <span className="user-email">{user.email}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Users;
