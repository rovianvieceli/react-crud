import React, { Component } from 'react'

class List extends Component {
    render() {
        const list = [{
            name: 'Rovian',
            email: 'rovian@mail.com'
        }, {
            name: 'Vicenzo',
            email: 'vicenzo@mail.com'
        }]

        return (
            <div>
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {list.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2">
                                {`${list.length} registro(s) localizados`}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default List;
