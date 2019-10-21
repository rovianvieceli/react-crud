import React, { Component } from 'react'
import User from './User'
import Photo from './user.png'

class Page extends Component {
    render() {
        return (
            <div>
                <span>Este texto é um componente</span>
                <User name="Rovian Vieceli" photo={Photo} />
                <User name="Vicenzo Vieceli" />
                <User name="Aline de Matto" />
            </div>
        )
    }
}

export default Page;
