import React, {useContext} from 'react';
// import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbara">

             <h3>STAR WARS</h3>
            <ul>
                <li><a href="/posts">Posts</a></li>
                <li><a href="/cards">Cards</a></li>
                <li><a href="about">About</a></li>
            </ul>
            <a onClick={logout}  className="a">
            Logout
            </a>
        </div>
    );
};

export default Navbar;
