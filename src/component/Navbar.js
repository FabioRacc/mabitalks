import {Component} from "react"

import logo from '../image/logo.png'
import bell from "../image/bell.svg"
import logout from "../image/logout.svg"

class Navbar extends Component {
    render() {
        return (
            <div className = "nav">
                <div className = "logo">
                    <img src={logo} alt = ""/>
                </div>
                <div className = "notifications">
                    <img src = {bell} alt = ""></img>
                    <div className = "profile">
                        Logout
                        <img src = {logout} alt = ""></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

