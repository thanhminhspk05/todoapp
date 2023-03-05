import React from 'react';

class DeleteComponent extends React.Component {
    state = {
        statusShown: false,
    };

    handleReverseStatus = () => {
        this.setState({
            statusShown: !this.state.statusShown,
        });
    };

    render() {
        return (
            <>
                {this.state.statusShown === false ? (
                    <div>
                        <button onClick={this.handleReverseStatus}>Show</button>
                    </div>
                ) : (
                    <>
                        {this.props.arrJobs.map((item, index) => {
                            return (
                                <div key={index}>
                                    <span>
                                        {item.title} - {item.salary} &nbsp;
                                    </span>
                                    <span onClick={() => this.props.handleDelete(item)}>X</span>
                                </div>
                            );
                        })}

                        <div>
                            <button onClick={this.handleReverseStatus}>Hide</button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default DeleteComponent;
