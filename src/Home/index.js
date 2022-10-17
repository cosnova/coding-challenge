import { Link } from 'react-router-dom';
import img from '../img/cosnova-meeting.jpg';
import './style.css';

const Home = () => (
  <>
    <div className="teaser">
      <img className="teaser__image" src={img} alt="" />
      <div className="teaser__text">
        <h1 className="teaser__topline">Make-up Browser</h1>
        <h2 className="teaser__headline">Entdecke neues Make-up</h2>
        <p className="teaser__copy">Finde nur während dieses Interviews Make-up auf beispielhafte Weise in einer kleinen React-App.<br />
        Vergewissere dich jetzt, dass sie funktioniert!</p>
        <Link to="/search" className="teaser__button"><span>Jetzt browsen</span></Link>
      </div>
    </div>
  </>
);

export default Home;
