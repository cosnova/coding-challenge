import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul className="navigation">
    <li className="navigation__item"><Link to="/">Start</Link></li>
    <li className="navigation__item"><Link to="/search">Suche</Link></li>
  </ul>
);

export default Navigation;
