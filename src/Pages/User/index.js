import React, { Component } from 'react';
import Form from './form';

export default class User extends Component {
    render() {
        const user = [{
            name: 'Rovian',
            email: 'rovian@mail.com'
        }, {
            name: 'Vicenzo',
            email: 'vicenzo@mail.com'
        }]

        return (
            <div>
                <Form></Form>
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {user.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2">{`${User.length} registro(s) localizados`}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
