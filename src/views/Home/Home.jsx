import React, { Component } from 'react';
import './Home.scss';
import logo from '../../assets/images/Facebook_Logo.png';
// recommended to use instead of <img src={../../assets/images/Facebook_Logo.png} alt="Facebook" />
import { connect } from 'react-redux';

class Home extends Component {
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    };
    render() {
        console.log(this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div className="welcome">
                    <img src={logo} alt="Facebook" />
                    <span>Hello, Welcome to Thanh Minh's website</span>
                </div>
                <div>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}. {item.name}{' '}
                                    <span className="delete" onClick={() => this.handleDeleteUser(item)}>
                                        <i className="fa-sharp fa-solid fa-trash"></i>
                                    </span>
                                </div>
                            );
                        })}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
