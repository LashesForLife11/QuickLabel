import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <main id="not-found">
            <h1>404</h1>
            <p>The page you were looking for does not exist</p>
            <NavLink className="button" to="/" exact>
                Go Home
            </NavLink>
        </main>
    );
};
