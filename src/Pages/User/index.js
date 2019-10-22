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
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => (
                            <tr key={index}>
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
