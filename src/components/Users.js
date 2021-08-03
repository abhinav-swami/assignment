import React, { Component } from 'react';
import axios from 'axios';
import './Users.css';

class Users extends Component {
     state = {
         Userdata: []
    }
    componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const Userdata = res.data;
        this.setState({ Userdata });
      })
    }
    render() {
        return (
            <div>
                <h1>List of Users : </h1>
                <table>
                    <thead>
                     <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Company</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>City</th>
                     </tr>
                    </thead>
                
                    <tbody>
                        {this.state.Userdata.map(user =>
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.company.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;
