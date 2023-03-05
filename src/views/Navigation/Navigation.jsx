import React, { Component } from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">Todos</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">Users</NavLink>
            </div>
        );
    }
}

export default Navigation;
