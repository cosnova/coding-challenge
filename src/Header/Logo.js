import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="logo">
    <span className="logo__head">Make-up</span>
    <span className="logo__foot">Browser</span>
  </Link>
);

export default Logo;
