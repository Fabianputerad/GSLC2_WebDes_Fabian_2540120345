import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Fab from './assets/Fab.png'
import graph from './assets/graph.png'
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <section className='welcome'>
        <div className='detail'> 
          <h1>Hi, my name is <span>Fabian Putera Djaja</span></h1>
          <p>a student from Bina Nusantara University majoring in Mobile
          Application & Technology.<br/> I am happy to share some of my experiences and skills, <br/> such as communication, collaboration, design and coding skills.</p>
        </div>
        <div class="images">
          <img src={graph} class="shape"/>
          <img src={Fab} class="me"/>
        </div>
      </section>
      <section className='porto'>
        <Skills/>
      </section>

    </div>
  );
}

export default App;
