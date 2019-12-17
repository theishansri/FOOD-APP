import React, { Component } from 'react'

class cart extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wraper orange lighten-1">
                    <ul>
                    <li style={{marginRight:'30px'}}className="right"><button className="btn-floating z-depth-0"></button></li>
                    </ul>
                </nav>
                <div className="container">
                    This is Your Cart
                </div>
            </div>
        )
    }
}

export default cart
