import React from 'react';
import AddComponent from './AddComponent';
import DeleteComponent from './DeleteComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {
                id: 1001,
                title: 'Developer',
                salary: 500,
            },
            {
                id: 1002,
                title: 'Tester',
                salary: 5000,
            },
            {
                id: 1003,
                title: 'Senior Developer',
                salary: 1200,
            },
            {
                id: 1004,
                title: 'Student',
                salary: 800,
            },
        ],
    };

    addNewJob = (job) => {
        if (!job.title || !job.salary) {
            alert('Please checked again');
            return;
        }
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };

    handleDelete = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter((item) => item.id !== job.id),
        });
    };

    render() {
        return (
            <div>
                <AddComponent addNewJob={this.addNewJob} />
                <DeleteComponent arrJobs={this.state.arrJobs} handleDelete={this.handleDelete} />
            </div>
        );
    }
}

export default MyComponent;
