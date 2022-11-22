import './App.css';
import house5 from './house5.jpg';
import house2 from './house2.jpg';

function App() {
  const name = 'James';
  const card1 = (
    <div className="card">
      <h4 className="card__title">House 5</h4>
      <img src={house5} alt="fitfh house" className="card__img" />
    </div>
  );
  const card2 = (
    <div className="card">
      <h4 className="card__title">House 2</h4>
      <img src={house2} alt="second house" className="card__img" />
    </div>
  );
  const person1 = (
    <div className="teamItem">
      <img src="/img/team2.jpg" alt="team 2" className="card__img" />
      <h3 className="team__title">John Doe</h3>
      <p className="team__ocupation">Ceo & Founder</p>
      <p className="team__desc">
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button>Contact</button>
    </div>
  );
  const person2 = (
    <div className="teamItem">
      <img src="/img/team1.jpg" alt="team 1" className="card__img" />
      <h3 className="team__title">Jane Doe</h3>
      <p className="team__ocupation">Architect</p>
      <p className="team__desc">
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button>Contact</button>
    </div>
  );
  const person3 = (
    <div className="teamItem">
      <img src="/img/team3.jpg" alt="team 3" className="card__img" />
      <h3 className="team__title">Mike Ross</h3>
      <p className="team__ocupation">Architect</p>
      <p className="team__desc">
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button>Contact</button>
    </div>
  );
  const person4 = (
    <div className="teamItem">
      <img src="/img/team4.jpg" alt="team 4" className="card__img" />
      <h3 className="team__title">Dan Star</h3>
      <p className="team__ocupation">Architect</p>
      <p className="team__desc">
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button>Contact</button>
    </div>
  );
  function HouseGrid() {
    return (
      <div className="houseContainer">
        {card1}
        {card2}
        {card1}
        {card2}
        {card1}
        {card2}
        {card1}
        {card2}
      </div>
    );
  }
  function TeamItem() {
    return (
      <div className="houseContainer">
        {person1}
        {person2}
        {person3}
        {person4}
      </div>
    );
  }
  function ContactContainer() {
    return (
      <div className="contactContainer">
        <h2 className="contact">Contact</h2>
        <p>Lets get in touch and talk about your next project.</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Comment" />
        <button className="blackBtn">Send Message</button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1 className="mainTitle">Hello {name} !!!</h1>
      <HouseGrid></HouseGrid>
      <TeamItem></TeamItem>
      <ContactContainer></ContactContainer>
    </div>
  );
}

export default App;
