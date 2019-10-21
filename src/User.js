import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <div>
                    Nome: {this.props.name}
                </div>
                <div>
                    Photo: <img src={this.props.photo} alt="" />
                </div>
            </div>
        )
    }
}

export default User;
