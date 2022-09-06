import {NavLink} from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <h1>Simple SPA</h1>
            <ul className="header">
                <li><NavLink to='/home' activeClassName="active">Home</NavLink></li>
                <li><NavLink to='/stuff' activeClassName="active">Stuff</NavLink></li>
                <li><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
            </ul>
        </div>
    )
};

export default Main;
