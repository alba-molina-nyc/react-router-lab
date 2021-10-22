import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="nav">
            {
            /* The Link component acts as an
            <a> tag, with some big differences:
            It does not refresh the page
            It does not make HTTP requests 
            The to prop takes in a URL path and matches it to the routes in our App.js
            */
            }
            
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/dashboard">
                <div>STOCKS</div>
            </Link>
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
        </div>
    )
}

export default Nav;